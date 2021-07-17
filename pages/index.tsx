import Head from 'next/head';

import { Footer, Hero, Main, Navbar } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Wheeler</title>
        <meta name="description" content="Josh Wheeler's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar />
        <Hero />
        <Footer />
      </Main>
    </>
  );
}
