import Head from 'next/head';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import readingTime from 'reading-time';

import { Card, Container, Footer, Header, Navbar } from '../../components';
import { BlogMetaData } from './[slug]';
import { useFixedNavbar } from '../../hooks';

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
  useFixedNavbar();
  return (
    <>
      <Head>
        <title>Josh Wheeler | Blog</title>
        <meta name="description" content="Josh Wheeler's personal tech blog." />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Navbar />
      <Container>
        <Header title="Blog" />
        <section>
          {blogs.map((blog) => (
            <Card
              key={blog.slug}
              wide
              mb={true}
              title={blog.title}
              body={blog.description}
              subtext={`${blog.date.toUpperCase()} • ${blog.readTime.toUpperCase()}`}
              cta="Read more"
              ctaLink={`blog/${blog.slug}`}
            />
          ))}
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
