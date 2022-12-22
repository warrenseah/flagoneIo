import React from "react";
import SinglePageNavBarDark from "../components/Layouts/SinglePageNavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const PortfolioDetails2 = () => {
  return (
    <>
      <SinglePageNavBarDark />

      <PageBanner
        pageTitle="Generative Art NFT Collection"
        BGImage="/images/page-banner2.jpg"
      />

      <PortfolioDetailsContent2 />

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default PortfolioDetails2;
