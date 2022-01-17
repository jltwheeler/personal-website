import Head from 'next/head';
import matter from 'gray-matter';
import { marked } from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import readingTime from 'reading-time';
import fs from 'fs';
import path from 'path';

import { Container, Footer, Header, Navbar } from '../../components';

// Add prismjs syntax highlighting
marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

const renderer = new marked.Renderer();

// Render links with target = _blank to open in new tabs. Code originally from
// https://github.com/markedjs/marked/issues/655#issuecomment-383226346
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer as any, href, title, text);
  if (href) {
    // Only open external links in new tabs
    if (href.slice(0, 1) !== '#')
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
  }
  return html;
};

const headingRenderer = renderer.heading;
renderer.heading = (text, level, raw, slugger) => {
  const html = headingRenderer.call(renderer as any, text, level, raw, slugger);
  if ([2, 3, 4].includes(level)) {
    const regex = new RegExp(/id="([^"]+)/);
    const result = regex.exec(html);
    if (result) {
      const id = result[1];
      return `<a href="#${id}"><h${level} id="${id}">${text}</h${level}></a>`;
    }
  }
  return html;
};

export const getStaticPaths = async () => {
  const files = await fs.promises.readdir('posts');

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace('.md', ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const mdText = (
    await fs.promises.readFile(path.join('posts', `${slug}.md`))
  ).toString();

  const { content, data } = matter(mdText);

  return {
    props: {
      slug,
      content: marked(content, { renderer }),
      data: { ...data, readTime: readingTime(content).text },
    },
  };
};

export interface BlogMetaData {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

interface PostProps {
  slug: string;
  content: string;
  data: BlogMetaData;
}

interface Params {
  params: PostProps;
}

interface BlogMetaProps {
  readTime: string;
  description: string;
  date: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ readTime, description, date }) => {
  return (
    <div className="blog-meta">
      <h3>{description}</h3>
      <div className="flex">
        <div>
          <i>Published by Josh Wheeler</i>
        </div>
        <div>
          <i>{`${date} • ${readTime}`}</i>
        </div>
      </div>
    </div>
  );
};

const Post: React.FC<PostProps> = ({ content, data }) => {
  return (
    <>
      <Head>
        <title>{`Josh Wheeler | Blog - ${data.title}`}</title>
        <meta
          title={`Blog - ${data.title}`}
          name={`Blog - ${data.title}`}
          content={`Blog - ${data.description}`}
        />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Navbar />
      <Container>
        <Header title={data.title} blogTitle />
        <BlogMeta
          readTime={data.readTime}
          description={data.description}
          date={data.date}
        />
        <div
          className="blog-page"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Post;
