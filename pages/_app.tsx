import type { AppProps } from 'next/app';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import '../styles/prism-theme.css';
import '../styles/globals.css';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({ theme: Theme.DARK, setTheme: () => ({}) });

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);

  useEffect(() => {
    if (window !== undefined) {
      if (
        window.localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in window.localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        setTheme(Theme.DARK);
        document.documentElement.classList.add('dark');
      } else {
        setTheme(Theme.LIGHT);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
export default MyApp;
