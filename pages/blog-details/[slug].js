import React, {useState, useEffect} from "react";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import Footer from "../../components/Layouts/Footer";
import { getPost } from "../api/post";
import { useRouter } from "next/router";
import NavbarDark from "../../components/Layouts/NavbarDark";
import Head from "next/head";
import { formatTitle } from "../../utils/formatting";
const BlogDetails = () => {
  const [post, setPost] = useState({});
  const router = useRouter()
  const setData = async (slug) => {
    let postData = await getPost(slug);
    setPost(postData);
  };
  useEffect(() => {
    setData(router.query.slug);
  }, [router.query.slug]);
  return (
    <>
      <Head>
        <title>FlagOne | Blog detail</title>
        <meta
          name="description"
          content="Blog detail."
        />
      </Head>
      <NavbarDark />

      <PageBanner pageTitle={formatTitle(post?.title)} BGImage="/images/page-banner2.jpg" />

      {post && <BlogDetailsContent post={post} />}

      <Footer />
    </>
  );
};

export default BlogDetails;
