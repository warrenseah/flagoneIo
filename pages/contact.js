import React from "react";
import Head from "next/head";
import NavbarDark from "../components/Layouts/NavbarDark";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Newsletter from "../components/Common/Newsletter";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Contact Us</title>
        <meta name="description" content="Contact page" />
      </Head>
      <NavbarDark />

      <PageBanner pageTitle="Contact Us" BGImage="/images/page-banner1.jpg" />

      <ContactForm />

      <ContactInfo />

      <div className="pb-100">
        <Newsletter />
      </div>

      <Footer />
    </>
  );
};

export default Contact;
