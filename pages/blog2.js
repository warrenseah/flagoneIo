import React from "react";
import PageBanner from "../components/Common/PageBanner";
import BlogRightSidebar from "../components/Blog/BlogRightSidebar";
import Footer from "../components/Layouts/Footer";
import NavbarDark from "../components/Layouts/NavbarDark";
import Head from "next/head";

const Blog2 = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Blog</title>
        <meta
          name="description"
          content="Blog listing."
        />
      </Head>
      <NavbarDark />

      <PageBanner pageTitle="Blog Right Sidebar" BGImage="/images/page-banner4.jpg" />

      <BlogRightSidebar />

      <Footer />
    </>
  );
};

export default Blog2;
