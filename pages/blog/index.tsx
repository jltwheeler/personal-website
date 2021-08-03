import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import { Container, Footer, Header, Main, Navbar } from '../../components';
import { ThemeProps } from '../../config';
import { BlogMetaData } from './[slug]';

const BlogCard = styled.article`
  cursor: pointer;
  color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  border-bottom: 2px solid ${(props: ThemeProps) => props.theme.colors.indigo6};
  padding: 2rem 0;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    padding: 2.25rem 0;
  }

  &:hover {
    background: ${(props: ThemeProps) => props.theme.colors.indigo4};
    border-color: ${(props: ThemeProps) => props.theme.colors.indigo5};
    a {
      color: ${(props: ThemeProps) => props.theme.colors.indigo11};
    }
  }

  &:active {
    background: ${(props: ThemeProps) => props.theme.colors.indigo5};
    border-color: ${(props: ThemeProps) => props.theme.colors.indigo5};
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.indigo10};
    font-weight: 500;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 2.5rem;
      line-height: 1.1;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      font-size: 2.25rem;
    }
  }

  .description {
    font-size: 1.8rem;
    padding-top: 1rem;
    color: ${(props) => props.theme.colors.indigo12};

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }

  .metadata {
    font-size: 1.6rem;
    padding: 0.25rem 0;
    color: ${(props) => props.theme.colors.indigo11};

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      font-size: 1.4rem;
    }
  }
`;

interface Blog extends BlogMetaData {
  slug: string;
}

interface BlogProps {
  blogs: Blog[];
}

export const getStaticProps = async () => {
  const files = await fs.promises.readdir('posts');
  const blogs = files.map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join('posts', file)));
    return {
      ...data,
      readTime: readingTime(content).text,
      slug: file.replace('.md', ''),
    };
  });
  const sortedBlogs = [...(blogs as Blog[])].sort((a, b) => b.id - a.id);

  return {
    props: { blogs: sortedBlogs },
  };
};

const Blog: React.FC<BlogProps> = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Josh Wheeler | Blog</title>
        <meta name="description" content="Josh Wheeler's personal tech blog." />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title="Blog" />
          <section>
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`blog/${blog.slug}`} passHref={true}>
                <BlogCard>
                  <a>{blog.title}</a>
                  <p className="metadata">
                    <i>{`${blog.date} • ${blog.readTime.toUpperCase()}`}</i>
                  </p>
                  <p className="description">{blog.description}</p>
                </BlogCard>
              </Link>
            ))}
          </section>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Blog;
