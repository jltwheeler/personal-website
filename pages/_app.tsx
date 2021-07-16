import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import { darkTheme, ThemeProps } from '../config';
import '../styles/globals.css';
import '../styles/prism-theme.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: ThemeProps) => props.theme.colors.indigo1};
    color: ${(props: ThemeProps) => props.theme.colors.indigo12};
  }

  /* scrollbar */
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props: ThemeProps) => props.theme.colors.indigo10};
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${(props: ThemeProps) => props.theme.colors.indigo11};
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
