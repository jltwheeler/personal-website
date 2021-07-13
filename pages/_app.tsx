import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { darkTheme, ThemeProps } from '../config';
import '../styles/globals.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps) => props.theme.colors.indigo1};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  }

  /* Animations */
  @keyframes linkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
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
