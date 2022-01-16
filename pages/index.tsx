import Head from 'next/head';

import { Footer, Hero, Navbar } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Wheeler - Full Stack Developer</title>
        <meta name="description" content="Josh Wheeler's personal website" />
        <link rel="icon" href="/jw-favicon.svg" />
      </Head>

      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
