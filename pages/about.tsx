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

    &:not(first-child) {
      margin: 1.5rem 0;
    }
  }

  img {
    display: block;
    margin: 0 auto;
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

  p,
  li,
  td {
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
    list-style-position: inside;
    padding: 0.5rem 0;
  }

  .stack {
    display: flex;
    justify-content: left;

    ul {
      margin-right: auto;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    padding: 1rem;
    &:hover {
      color: ${(props: ThemeProps) => props.theme.colors.indigo11};
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
            <img src="./jw-sk.jpg" alt="Josh in South Korea" />
            <h3>About</h3>
            <p>
              <i>
                I&apos;m Josh Wheeler, a software engineer with a deep passion
                for technology, problem solving and continuous learning.
              </i>
            </p>
            <p>
              After graduating university in 2015, with a Master&apos;s Degree
              in Civil Engineering and a Bachelor Degree in Finance, I worked as
              a Highways and Traffic Engineer on large complex design projects
              all across Australia. Whilst the work was challenging, my heart
              wasn&apos;t in it. In mid-2019, I finally decided to follow my
              true passion, and make the transition into becoming a software
              engineer. <i>I haven&apos;t looked back since.</i>
            </p>

            <p>
              I currently work for a London-based start up called{' '}
              <Accent>By Miles</Accent>, where I build full stack web
              applications. More specifically, I specialise in designing and
              building decoupled systems using AWS serverless technologies. If
              you would like to read more about my journey into becoming a full
              stack web developer, please have a read of my{' '}
              <Link href={'/blog/hello-world'} passHref={true}>
                <a target="_blank">&apos;Hello World&apos; blog post</a>
              </Link>
              .
            </p>

            <h3>Primary Tech Stack</h3>
            <table>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>Node.js (Express.js)</td>
                  <td>Postgres</td>
                  <td>Docker</td>
                </tr>
                <tr>
                  <td>CSS/SASS</td>
                  <td>Python (Flask)</td>
                  <td>DynamoDB</td>
                  <td>Serverless Framework</td>
                </tr>
                <tr>
                  <td>JavaScript & TypeScript</td>
                  <td>REST</td>
                  <td>AWS</td>
                  <td>GitHub Actions</td>
                </tr>
                <tr>
                  <td>React (Next.js)</td>
                  <td>GraphQL</td>
                  <td>Terraform</td>
                  <td>Testing</td>
                </tr>
              </tbody>
            </table>

            <h3>What You Can Ask Me About</h3>
            <ul>
              <li>Full stack web development</li>
              <li>Building cloud native web applications</li>
              <li>How to implement CICD in projects</li>
              <li>Implementing serverless architecture patterns</li>
              <li>Automating tasks with Python or Node.js</li>
              <li>Building CLI applications</li>
              <li>Unit and integration testing</li>
            </ul>

            <h3>Technologies I&apos;m Learning and Refining in 2021</h3>
            <ul>
              <li>Rust</li>
              <li>CSS in greater depth</li>
              <li>DynamoDB</li>
              <li>Microservices via message queues.</li>
            </ul>

            <h3>Life Outside of Software Engineering</h3>
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
          </AboutMe>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default About;
