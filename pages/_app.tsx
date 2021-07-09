import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { darkTheme, ThemeProps } from '../config';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps) => props.theme.colors.indigo1};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
