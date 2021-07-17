import Head from 'next/head';
import matter from 'gray-matter';
import marked from 'marked';
import prism from 'prismjs';
import readingTime from 'reading-time';
import fs from 'fs';
import path from 'path';

import { Container, Footer, Header, Main, Navbar } from '../../components';

marked.setOptions({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

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

export interface BlogMetaData {
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

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const mdText = (
    await fs.promises.readFile(path.join('posts', `${slug}.md`))
  ).toString();

  const { content, data } = matter(mdText);

  return {
    props: {
      slug,
      content: marked(content),
      data: { ...data, readTime: readingTime(content).text },
    },
  };
};

const Post: React.FC<PostProps> = ({ content, data }) => {
  return (
    <>
      <Head>
        <title>{`Josh Wheeler | ${data.title}`}</title>
        <meta title={data.title} name={data.title} content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title={data.title} />
          {data.readTime}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Post;
