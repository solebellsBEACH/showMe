import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { store } from '../store';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
