import Head from 'next/head';
import styled from 'styled-components';

import { Footer, Hero, Navbar } from '../components';
import { ThemeProps } from '../config';

const MainStyle = styled.main`
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 5rem;

  @media (max-width: ${(props: ThemeProps) => props.theme.sizes['s']}px) {
    padding-bottom: 10rem;
  }
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
