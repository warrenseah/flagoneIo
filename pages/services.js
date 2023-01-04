import React from "react";
import Head from "next/head";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const ServiceDetails = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Services</title>
        <meta
          name="description"
          content="FlagOne services and offerings as a web3 tech provider."
        />
      </Head>
      <NavbarDark />

      <PageBanner
        pageTitle="Web3 dApp Development"
        BGImage="/images/page-banner1.jpg"
      />

      <ServiceDetailsContent />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default ServiceDetails;
