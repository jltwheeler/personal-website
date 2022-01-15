import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import '../styles/prism-theme.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window !== undefined) {
      if (
        window.localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in window.localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);
  return <Component {...pageProps} />;
}
export default MyApp;
