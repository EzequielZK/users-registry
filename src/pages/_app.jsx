import "../styles/globals.js";
import { Modal, NavMenu } from "../components";
import GlobalStyle from "../styles/globals";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/themes/mainTheme.js";
import Head from "next/head";
import FeedbackModal from "../components/genericComponents/feedbackModal/FeedbackModal.jsx";
import Storage from "../context/StorageContext.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Users Registration</title>
      </Head>
      <ThemeProvider theme={mainTheme}>
        <Storage>
          <NavMenu>
            <Component {...pageProps} />
          </NavMenu>
          <GlobalStyle />
          <Modal />
          <FeedbackModal />
        </Storage>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
