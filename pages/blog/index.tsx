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
  margin: 1rem 0;
`;

const BlogLink = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.indigo10};
  font-weight: 400;

  &:hover {
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};
  }
`;

interface BlogProps {
  slugs: string[];
  matters: BlogMetaData[];
}

export const getStaticProps = async () => {
  const files = await fs.promises.readdir('posts');
  const matters = files.map((file) => {
    const { data, content } = matter(fs.readFileSync(path.join('posts', file)));
    return { ...data, readTime: readingTime(content).text };
  });

  return {
    props: {
      slugs: files.map((file: string) => file.replace('.md', '')),
      matters,
    },
  };
};

const Blog: React.FC<BlogProps> = ({ slugs, matters }) => {
  return (
    <>
      <Head>
        <title>Josh Wheeler | Blog</title>
        <meta name="description" content="Josh Wheeler's personal tech blog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title="Blog" />
          {slugs.map((slug, i) => (
            <BlogCard key={slug}>
              <Link href={`blog/${slug}`} passHref={true}>
                <BlogLink>{matters[i].title}</BlogLink>
              </Link>
              <p>{matters[i].description}</p>
              <p>{matters[i].date}</p>
              <p>{matters[i].readTime}</p>
            </BlogCard>
          ))}
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Blog;
