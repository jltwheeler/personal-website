import Head from 'next/head';
import Link from 'next/link';
import matter from 'gray-matter';
import marked from 'marked';
import prism from 'prismjs';
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

// Render links with target = _blank to open in new tabs. Code originally from
// https://github.com/markedjs/marked/issues/655#issuecomment-383226346
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);
  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
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
  margin-bottom: 1.5rem;

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
    }
  }
  div {
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
    font-size: 1.5rem;
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
      <div>
        <i>{`Published by Josh Wheeler on ${date} - ${readTime}`}</i>
      </div>
    </BlogMetaStyle>
  );
};

const BlogBody = styled.section`
  h2 {
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    font-size: 3rem;
    padding-top: 2rem;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 2.75rem;
      line-height: 1.5;
      padding-top: 1rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 2.5rem;
      line-height: 1.25;
    }
  }

  h3 {
    color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    font-size: 2.5rem;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 2.75rem;
      line-height: 1.3;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 2.5rem;
      line-height: 1.2;
    }
  }

  p,
  li {
    font-size: 1.8rem;
    padding: 1rem 0;
    line-height: 1.6;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.6rem;
      padding: 1rem 0;
      line-height: 1.5;
    }
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      line-height: 1.4;
    }
  }
  blockquote {
    background: ${(props: ThemeProps) => props.theme.colors.indigo5};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
    padding: 0 2rem;
    border-radius: 1rem;
    margin: 1rem 0;
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
  li {
    list-style-position: inside;
    padding: 0.5rem 0;
  }
  ul {
    padding-left: 1rem;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 85%;
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
          applications. To learn more about Josh,
          <Link href={`/about`} passHref={true}>
            <a> click here.</a>
          </Link>
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
        <title>{`Josh Wheeler | ${data.title}`}</title>
        <meta title={data.title} name={data.title} content={data.description} />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title={data.title} />
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
