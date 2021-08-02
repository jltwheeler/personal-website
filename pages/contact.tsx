import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Container, Footer, Header, Main, Navbar } from '../components';
import { ThemeProps } from '../config';

const ContactStyle = styled.section`
  margin-bottom: 2rem;

  img {
    margin-top: 2rem;
    display: block;
    margin: 1rem auto;
    width: 20%;
    padding: 2rem 0;

    @media (min-width: ${(props: ThemeProps) => props.theme.sizes['3xl']}px) {
      padding-top: 7.5rem;
    }

    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['m']}px) {
      width: 40%;
    }
    @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
      width: 50%;
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

  p {
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
`;

const Contact = () => {
  return (
    <>
      <Head>
        <title>Josh Wheeler | Contact</title>
        <meta
          name="description"
          content="Get in touch and contact Josh Wheeler"
        />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <Main>
        <Navbar />
        <Container>
          <Header title="Contact" />
          <ContactStyle>
            <p>Thanks for your interest in getting in touch!</p>
            <p>
              Whether you have a question about one of my
              <Link href={'/blog/'} passHref={true}>
                <a target="_blank"> blog posts </a>
              </Link>
              , have a topic you want me to blog about, or just want to discuss
              anything tech related, I’m happy to receive an email.
            </p>
            <p>
              <strong>
                The best way to reach me is by emailing me at{' '}
                <a
                  target="_blank"
                  href="mailto:hi@joshwheeler.tech"
                  rel="noreferrer"
                >
                  hi@joshwheeler.tech
                </a>
                .
              </strong>{' '}
              I will try my best to get back in touch within a day or two!
            </p>

            <p>
              Also please feel free to get in touch on social media. The main
              platforms I use are{' '}
              <a
                href="https://github.com/jltwheeler"
                target="_blank"
                rel="noreferrer"
              >
                GitHub{' '}
              </a>
              and
              <a
                href="https://www.linkedin.com/in/joshuawheeler93/"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                LinkedIn
              </a>
              .
            </p>
            <img alt="keyboard" src="./jw-logo-dark.svg" />
          </ContactStyle>
        </Container>
        <Footer />
      </Main>
    </>
  );
};

export default Contact;
