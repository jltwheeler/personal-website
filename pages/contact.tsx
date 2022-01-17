import Head from 'next/head';

import { Container, Footer, Header, Navbar } from '../components';

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

      <Navbar />
      <Container>
        <Header title="Contact" />
        <p>
          Thanks for your interest in getting in touch! The best way to reach me
          is by emailing me at{' '}
          <a target="_blank" href="mailto:hi@joshwheeler.tech" rel="noreferrer">
            hi@joshwheeler.tech
          </a>
        </p>
        <br />
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
      </Container>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
