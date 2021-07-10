import Head from 'next/head';
import styled from 'styled-components';

import { Footer, Hero, Navbar } from '../components';

const MainStyle = styled.main`
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Wheeler</title>
        <meta name="description" content="Josh Wheeler's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainStyle>
        <Navbar />
        <Hero />
        <Footer />
      </MainStyle>
    </>
  );
}
