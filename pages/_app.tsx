import Head from "next/head";
import "../styles/globals.css";
import "../styles/variables.css";
import { AppProps } from "next/app";
import React from "react"; 
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AppContextProvider } from "Context/AppContext";
import { PagesContextProvider } from "Context/PagesContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <Navbar />
      <PagesContextProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </PagesContextProvider>
      <Footer />
    </>
  );
};

export default MyApp;
