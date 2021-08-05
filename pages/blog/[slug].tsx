import Head from 'next/head';
import matter from 'gray-matter';
import marked from 'marked';
import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import readingTime from 'reading-time';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';

import { Container, Footer, Header, Main, Navbar } from '../../components';
import { ThemeProps } from '../../config';

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
  const html = linkRenderer.call(renderer, href, title, text);
  if (href) {
    // Only open external links in new tabs
    if (href.slice(0, 1) !== '#')
      return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
  }
  return html;
};

const headingRenderer = renderer.heading;
renderer.heading = (text, level, raw, slugger) => {
  const html = headingRenderer.call(renderer, text, level, raw, slugger);
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

const BlogMetaStyle = styled.section`
  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    margin-bottom: 0.75rem;
  }

  h3 {
    font-size: 2.25rem;
    font-weight: 300;
    padding-bottom: 1rem;
    line-height: 1.4;
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.75rem;
      line-height: 1.2;
    }
  }
  div {
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
    font-size: 1.5rem;
  }

  .flex {
    display: flex;

    > div:not(:first-child) {
      padding-left: 1rem;
      @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
        padding: 0;
      }
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      flex-direction: column;
    }
  }
`;

interface BlogMetaProps {
  readTime: string;
  description: string;
  date: string;
}

const BlogMeta: React.FC<BlogMetaProps> = ({ readTime, description, date }) => {
  return (
    <BlogMetaStyle>
      <h3>{description}</h3>
      <div className="flex">
        <div>
          <i>Published by Josh Wheeler</i>
        </div>
        <div>
          <i>{`${date} • ${readTime}`}</i>
        </div>
      </div>
    </BlogMetaStyle>
  );
};

const BlogBody = styled.section`
  h2 {
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    font-size: 3.5rem;
    padding-top: 2rem;
    display: inline-block;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      line-height: 1.5;
      padding-top: 1rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      line-height: 1.25;
      font-size: 2.75rem;
    }
  }

  h3 {
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    font-size: 2.5rem;
    display: inline-block;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 2.75rem;
      line-height: 1.3;
      padding: 0.5rem 0;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 2rem;
      line-height: 1.2;
    }
  }

  p,
  li,
  code {
    font-size: 1.8rem;
    padding: 1rem 0;
    line-height: 1.6;

    code {
      background: ${(props: ThemeProps) => props.theme.colors.indigo5};
      border-radius: 7.5px;
      padding: 0.25rem 0.5rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.6rem;
      padding: 1rem 0;
      line-height: 1.5;
    }
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      line-height: 1.4;
    }
  }

  pre {
    border-radius: 10px;
    code {
      font-size: 1.4rem;
    }
  }

  li {
    padding: 0.25rem 0;
  }

  blockquote {
    background: ${(props: ThemeProps) => props.theme.colors.indigo5};
    border-left: 5px solid ${(props: ThemeProps) => props.theme.colors.indigo12};
    padding: 0 1rem 0 2.5rem;
    margin: 1rem 0;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      padding: 0 1rem 0 1.5rem;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.indigo11};
    &:hover {
      color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    }

    &:active {
      color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    }
  }
  ul,
  ol {
    margin-left: 3rem;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 95%;
    padding: 1rem 0;
  }
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props: ThemeProps) => props.theme.colors.indigo10};

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
    height: 2px;
  }
`;

const BlogFooterStyle = styled.section`
  padding: 5rem 0 2rem 0;
  display: flex;
  flex-direction: column;

  .date-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .date {
      padding-left: 5rem;
      width: 20rem;
      @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
        padding-left: 3rem;
        width: 15rem;
      }
      @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
        line-height: 1.25;
      }
    }
    font-size: 1.5rem;
  }
  .bio {
    display: flex;
    align-items: center;
    justfify-content: center;
  }

  img {
    height: auto;
    width: auto;
    max-width: 12.5rem;
    max-height: 12.5rem;
    border-radius: 50%;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      max-width: 10rem;
      max-height: 10rem;
    }
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      max-width: 7.5rem;
      max-height: 7.5rem;
    }
  }

  .bio-description {
    padding: 2rem 0;
    width: 50%;
    font-size: 1.8rem;
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      width: 60%;
      font-size: 1.6rem;
    }
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 1.4rem;
      line-height: 1.3;
      width: 70%;
    }
    margin-right: 5rem;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.indigo11};
    &:hover {
      color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    }

    &:active {
      color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    }
  }
`;

const BlogFooter: React.FC<{ date: string }> = ({ date }) => {
  return (
    <BlogFooterStyle>
      <div className="date-container">
        <HR />
        <div className="date">{date}</div>
      </div>
      <section className="bio">
        <div className="bio-description">
          <strong>Josh Wheeler</strong> is a software engineer based in London
          who specialises in developing cloud native full stack web
          applications.
        </div>
        <img src="../josh.jpg" alt="Josh Wheeler Profile Pic" />
      </section>
    </BlogFooterStyle>
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

      <Main>
        <Navbar />
        <Container>
          <Header title={data.title} blogTitle />
          <BlogMeta
            readTime={data.readTime}
            description={data.description}
            date={data.date}
          />
          <BlogBody dangerouslySetInnerHTML={{ __html: content }} />
          <BlogFooter date={data.date} />
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Post;
