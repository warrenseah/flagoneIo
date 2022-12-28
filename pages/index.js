import React from "react";
import SinglePageNavbar from "../components/Layouts/SinglePageNavbar";
import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
import Services from "../components/HomePages/DefaultHome/Services";
import About from "../components/HomePages/DefaultHome/About";
import OurWorks from "../components/HomePages/DefaultHome/OurWorks";
import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";
import Feedback from "../components/Common/Feedback";
import Team from "../components/Common/Team";
import FunFacts from "../components/Common/FunFacts";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <SinglePageNavbar />

      <MainBanner />

      <Services />

      <About />

      <OurWorks />

      <WorkProcess />

      <CtaArea />

      <Footer />
    </>
  );
};

export default Index;
