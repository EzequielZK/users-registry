import "../styles/globals.js";
import { Modal, NavMenu } from "../components";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/mainTheme.js";
import Head from "next/head";
import FeedbackModal from "../components/genericComponents/feedbackModal/FeedbackModal.jsx";

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
        <FeedbackModal />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
