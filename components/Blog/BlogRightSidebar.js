import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { getPosts } from "../../pages/api/post";
import { formatDate } from "../../utils/formatting";
import { useRouter } from "next/router";

const blogPostData = [
  {
    image: "/images/blog/blog1.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 15, 2023",
    category: "Technology",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 16, 2023",
    category: "Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "3 WooCommerce Plugins to Boost Sales",
    date: "Feb 17, 2023",
    category: "IT Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "300",
  },
  {
    image: "/images/blog/blog4.jpg",
    title: "Top 21 Must-Read Blogs For Creative Agencies",
    date: "Feb 18, 2023",
    category: "Development",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "400",
  },
  {
    image: "/images/blog/blog5.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 19, 2023",
    category: "Apps",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "500",
  },
  {
    image: "/images/blog/blog6.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 20, 2023",
    category: "Marketing",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog-details",
    aosDelay: "600",
  },
];

const BlogRightSidebar = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const setPostsData = async () => {
    const id = await router.query.id
    let data = await getPosts();
    setPosts(data.edges);
  };
  useEffect(() => {
    setPostsData();
  }, []);
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
                {posts &&
                  posts.map((value, i) => (
                    <div
                      className="col-lg-6 col-md-6"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      // data-aos-delay={value.aosDelay}
                    >
                      <div className="single-blog-item">
                        <div className="blog-image">
                          {/* <Link href={value.readMoreLink}>
                            <img src={value.image} alt="image" />
                          </Link> */}

                          {/* <div className="post-tag">
                            <Link href={"/blog-details"}>{value.category}</Link>
                          </div> */}
                        </div>

                        <div className="blog-post-content">
                          <span className="date">{formatDate(value.node.date)}</span>
                          <h3>
                            <Link href={`/blog-details/${value.node.id}` }>
                              {value.node.title}
                            </Link>
                          </h3>

                          <div dangerouslySetInnerHTML={{__html: value.node.content}} />

                          <Link
                            href={`/blog-details/${value.node.id}`}
                            className="read-more-btn"
                          >
                            Read More
                            <i className="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="col-lg-12 col-md-12">
                  {/* Pagination */}
                  <div className="pagination-area">
                    <a className="prev page-numbers">
                      <i className="fa-solid fa-angles-left"></i>
                    </a>
                    {posts.map((post, i) => {
                      return <a className="page-numbers">{post.node.postId}</a>;
                    })}
                    {/* <a className="page-numbers">1</a>

                    <span className="page-numbers current">2</span>

                    <a className="page-numbers">3</a>

                    <a className="page-numbers">4</a> */}

                    <a className="next page-numbers">
                      <i className="fa-solid fa-angles-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightSidebar;
