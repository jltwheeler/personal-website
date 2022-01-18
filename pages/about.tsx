import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { Container, Footer, Header, Navbar } from '../components';
import { Card } from '../components/Card';
import { useFixedNavbar } from '../hooks';

const About = () => {
  useFixedNavbar();
  return (
    <>
      <Head>
        <title>Josh Wheeler | About Me</title>
        <meta name="description" content="Josh Wheeler's about me page." />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Navbar />
      <Container>
        <Header title="About me" />
        <article className="prose dark:prose-invert prose-a:text-blue-600">
          <section className="text-base sm:text-lg">
            <p>
              I&apos;m Josh Wheeler, an Australian software engineer currently
              based in London.
            </p>
            <p>
              I specialise in building full stack web applications. In
              particular, I&apos;m passionate about designing and building
              decoupled systems using modern AWS serverless technology patterns.
              On the side, I&apos;m also learning rust 🦀.
            </p>
            <p>
              Outside of web development, I enjoy music 🎵, guitar 🎸,
              travelling ✈️, basketball 🏀 and snowboarding 🏂.
            </p>
            <p>
              If you would like to read more about my journey into becoming a
              full stack web developer, please have a read of my{' '}
              <Link href={'/blog/hello-world'} passHref={true}>
                <a target="_blank">&apos;Hello World&apos; blog post</a>
              </Link>
              .
            </p>
          </section>

          <section>
            <Link href="#primary-tech-stack" passHref={true}>
              <h3 className="text-3xl font-bold text-blue-600">
                My primary tech stack
              </h3>
            </Link>

            <div className="flex justify-center sm:flex sm:justify-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card
                  title="Backend 🔚"
                  body={[
                    'Node.js, Python, Testing',
                    'System design, REST & GraphQL',
                    'PostgreSQL, DynamoDB',
                  ]}
                />
                <Card
                  title="Frontend 🖥️"
                  body={[
                    'HTML, CSS / SASS',
                    'JavaScript & TypeScript',
                    'React (Next.js) & Redux',
                  ]}
                />
                <Card
                  title="Cloud ☁️ & Tooling 🛠️"
                  body={[
                    'AWS, Serverless, Terraform',
                    'Docker, Linux, GitHub Actions',
                    'eslint, prettier, esbuild',
                  ]}
                />
              </div>
            </div>
          </section>

          <section>
            <Link href="#what-you-can-ask-me-about" passHref={true}>
              <h3 className="text-3xl font-bold text-blue-600">
                What you can ask me about
              </h3>
            </Link>
            <ul className="list-disc pl-8">
              <li>Building cloud native web applications</li>
              <li>
                Implementing devops practices on projects (e.g. CICD, automated
                testing and monitoring)
              </li>
              <li>Building serverless services</li>
              <li>Automating tasks with Node.js or Python</li>
              <li>Building CLI applications</li>
            </ul>
          </section>

          <section>
            <Link href="#technologies-im-focusing-on-in-2021" passHref={true}>
              <h3 className="text-3xl font-bold text-blue-600">
                Technologies I&apos;m focusing on in 2022
              </h3>
            </Link>
            <ul className="list-disc pl-8">
              <li>
                Rust - want to get a better understand of low level languages
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://tailwindcss.com/"
                  rel="noreferrer"
                >
                  tailwindccss
                </a>
              </li>
              <li>Further refine TypeScript knowledge</li>
              <li>Building event-base systems in AWS using AWS EventBridge</li>
              <li>Continue tinkering with my Neovim lua configuration</li>
            </ul>
          </section>
          <img src="./jw-sk.jpg" alt="Josh in South Korea" />
        </article>
      </Container>
      <Footer />
    </>
  );
};

export default About;
