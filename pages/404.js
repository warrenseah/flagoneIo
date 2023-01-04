import React from "react";
import Head from "next/head";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import ErrorContent from "../components/Error/ErrorContent";
import Footer from "../components/Layouts/Footer";

const Error = () => {
  return (
    <>
      <Head>
        <title>FlagOne | 404 Page</title>
        <meta
          name="description"
          content="This page is not found. Please try again."
        />
      </Head>
      <NavbarDark />

      <PageBanner pageTitle="404 Error" BGImage="/images/page-banner3.jpg" />

      <ErrorContent />

      <Footer />
    </>
  );
};

export default Error;
