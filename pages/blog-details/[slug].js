import React, {useState, useEffect} from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import Footer from "../../components/Layouts/Footer";
import { getPost } from "../api/post";
import { useRouter } from "next/router";

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
      <NavbarTwo />

      <PageBanner pageTitle={post?.title} BGImage="/images/page-banner2.jpg" />

      {post && <BlogDetailsContent post={post} />}

      <Footer />
    </>
  );
};

export default BlogDetails;
