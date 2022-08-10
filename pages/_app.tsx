import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Container from "../components/layouts/Container";
import { MdxComponentsProvider } from "../contexts/mdxContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MdxComponentsProvider>
        <Container>
          <Component {...pageProps} />
        </Container>
      </MdxComponentsProvider>
    </ThemeProvider>
  );
}

export default App;
