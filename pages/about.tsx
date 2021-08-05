import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Accent, Container, Footer, Header, Main, Navbar } from '../components';
import { ThemeProps } from '../config';

const AboutMe = styled.section`
  margin-bottom: 2rem;
  h3 {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.1;
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};
    cursor: pointer;

    &:not(first-child) {
      margin: 1.5rem 0;
    }
  }

  img {
    display: block;
    margin: 1rem auto;
    width: 100%;
    padding: 1rem 0;
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

  i {
    color: ${(props: ThemeProps) => props.theme.colors.indigo11};
    font-weight: 500;
  }
  ul {
    margin-left: 3rem;
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

  li {
    line-height: 1.4;
    padding: 0.5rem 0;
  }

  .stack {
    display: grid;
    grid-template: 1fr / repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 0;

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      grid-gap: 1rem;
      grid-template: 4fr / repeat(1, 1fr);
    }

    li {
      list-style: none;
    }
  }
`;

const About = () => {
  return (
    <>
      <Head>
        <title>Josh Wheeler | About Me</title>
        <meta name="description" content="Josh Wheeler's about me page." />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title="About Me" />
          <AboutMe>
            <section id="summary">
              <p>
                <i>
                  I&apos;m Josh Wheeler, a software engineer with a deep passion
                  for technology, problem solving and continuous learning.
                </i>
              </p>
              <Link href="#summary" passHref={true}>
                <h3>Summary</h3>
              </Link>
              <p>
                After graduating university in 2015, with a Master&apos;s Degree
                in Civil Engineering and a Bachelor Degree in Finance, I worked
                as a Highways and Traffic Engineer on large complex design
                projects all across Australia. Whilst the work was challenging,
                my heart wasn&apos;t in it. In mid-2019, I finally decided to
                follow my true passion, and make the transition into becoming a
                software engineer. <i>I haven&apos;t looked back since.</i>
              </p>

              <p>
                I currently work for a London-based start up called{' '}
                <Accent>By Miles</Accent>, where I build full stack web
                applications. More specifically, I specialise in designing and
                building decoupled systems using AWS serverless technologies. If
                you would like to read more about my journey into becoming a
                full stack web developer, please have a read of my{' '}
                <Link href={'/blog/hello-world'} passHref={true}>
                  <a target="_blank">&apos;Hello World&apos; blog post</a>
                </Link>
                .
              </p>
            </section>

            <section id="primary-tech-stack">
              <Link href="#primary-tech-stack" passHref={true}>
                <h3>Primary Tech Stack</h3>
              </Link>
              <ul className="stack">
                <li>
                  <Accent style={{ letterSpacing: '1px' }}>BACKEND</Accent>{' '}
                  <br />
                  Node.js (Express & Nest), Jest, <br />
                  Python, REST & GraphQL APIs, <br />
                  PostgreSQL, DynamoDB, TypeORM
                </li>
                <li>
                  <Accent style={{ letterSpacing: '1px' }}>FRONTEND</Accent>
                  <br />
                  HTML, CSS / SASS, <br />
                  JavaScript & TypeScript, <br />
                  React (Next.js) & Redux
                </li>
                <li>
                  <Accent style={{ letterSpacing: '1px' }}>
                    CLOUD / TOOLING
                  </Accent>{' '}
                  <br />
                  AWS, Linux, Terraform, Docker, <br />
                  Serverless Framework, <br />
                  Github Actions <br />
                </li>
              </ul>
            </section>

            <section id="what-you-can-ask-me-about">
              <Link href="#what-you-can-ask-me-about" passHref={true}>
                <h3>What You Can Ask Me About</h3>
              </Link>
              <ul>
                <li>Building cloud native web applications</li>
                <li>
                  Implementing devops practices on projects (e.g. CICD,
                  automated testing and monitoring)
                </li>
                <li>Building serverless services</li>
                <li>Automating tasks with Python or Node.js</li>
                <li>Building CLI applications</li>
              </ul>
            </section>

            <section id="technologies-im-focusing-on-in-2021">
              <Link href="#technologies-im-focusing-on-in-2021" passHref={true}>
                <h3>Technologies I&apos;m Focusing on in 2021</h3>
              </Link>
              <ul>
                <li>
                  Rust - want to get a better understand of low level languages
                </li>
                <li>
                  <a
                    href="https://css-for-js.dev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    CSS in greater depth
                  </a>
                </li>
                <li>DynamoDB, with a focus on data modelling</li>
                <li>
                  Different microservice implementations in AWS, particularly
                  with message queues
                </li>
                <li>
                  <a
                    href="https://neovim.io/roadmap/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Neovim 0.5{' '}
                  </a>{' '}
                  - switching from CoC to built-in LSP and moving{' '}
                  <Accent>init.vim</Accent> config to Lua,
                  <a
                    href="https://www.youtube.com/watch?v=190HoB0pVro&list=PLhoH5vyxr6QqPtKMp03pcJd_Vg8FZ0rtg&index=26&ab_channel=ChrisAtMachine"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    more details
                  </a>
                </li>
              </ul>
            </section>

            <section id="life-outside-of-software-engineering">
              <Link
                href="#life-outside-of-software-engineering"
                passHref={true}
              >
                <h3>Life Outside of Software Engineering</h3>
              </Link>
              <ul>
                <li>
                  Massive fan of sports in general, with particular liking for
                  basketball, Australian football and regular football.
                </li>
                <li>
                  Passionate about listening and playing music - have played the
                  guitar for most of my life
                </li>
                <li>
                  Travelling - seeing new parts of the world, learning about new
                  cultures and most of all, trying new food!
                </li>
              </ul>
            </section>
            <img src="./jw-sk.jpg" alt="Josh in South Korea" />
          </AboutMe>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default About;
