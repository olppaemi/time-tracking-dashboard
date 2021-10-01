import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Center } from "../components/Center";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Frontend Mentor | Time tracking dashboard</title>
      </Head>
      <GlobalStyles />
      <main className="main">
        <Center>
          <Component {...pageProps} />
        </Center>
      </main>
    </ThemeProvider>
  );
}
export default MyApp;
