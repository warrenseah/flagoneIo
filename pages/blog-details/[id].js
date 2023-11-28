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
  const setData = async () => {
    const id = await router.query.id
    let postData = await getPost(id);
    setPost(postData);
  };
  useEffect(() => {
    setData();
  }, []);
  return (
    <>
      <NavbarTwo />

      <PageBanner pageTitle={post.title} BGImage="/images/page-banner2.jpg" />

      <BlogDetailsContent post={post} />

      <Footer />
    </>
  );
};

export default BlogDetails;
