import '@/styles/globals.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ville Toimela - Web Developer</title>
        <meta name="description" content="I am a passionate web developer with some experience in creating diverse websites and web applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
