import "../styles/globals.js";
import { Modal, NavMenu } from "../components";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/mainTheme.js";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Users Registration</title>
      </Head>
      <ThemeProvider theme={mainTheme}>
        <NavMenu>
          <Component {...pageProps} />
        </NavMenu>
        <GlobalStyle />
        <Modal />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
