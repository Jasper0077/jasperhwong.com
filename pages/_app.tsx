import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  return  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default App;
