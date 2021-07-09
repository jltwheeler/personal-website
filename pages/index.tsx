import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Josh Wheeler</title>
        <meta name="description" content="Josh Wheeler's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello world!</main>
      <footer>
        <div>Footer</div>
      </footer>
    </div>
  );
}
