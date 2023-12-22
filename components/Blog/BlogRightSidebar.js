import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import { getPaginatedPosts } from "../../pages/api/post";
import { formatDate } from "../../utils/formatting";
import { useRouter } from "next/router";

const BlogRightSidebar = () => {
  const [page, setPage] = useState(1);
  const perPagePosts = 2;
  const [posts, setPosts] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const router = useRouter();
  const setPostsData = async (payload) => {
    const id = await router.query.id;
    let data = await getPaginatedPosts(payload);
    setPosts(data.edges);
    setPageInfo(data.pageInfo)
  };
  useEffect(() => {
    setPostsData({ first: perPagePosts, after: pageInfo?.endCursor });
  }, [page]);
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
                         {/* {value.node.featuredImage && value.node.featuredImage.node.sourceUrl && <Link href={`/blog-details/${value.node.slug}`}>
                            <img src={value.node.featuredImage.node.sourceUrl} alt="image" />
                          </Link>} */}

                          <div className="post-tag">
=                            {
                              value?.node?.tags?.nodes.map(tag => {
                                return <Link href={"/blog-details"}>{tag.name}</Link>
                              })
                            }
                          </div>
                          <div className="post-tag">
=                            {
                              value?.node?.categories?.nodes.map(category => {
                                return <Link href={"/blog-details"}>{category.name}</Link>
                              })
                            }
                          </div>
                        </div>

                        <div className="blog-post-content">
                          <span className="date">
                            {formatDate(value.node.date)}
                          </span>
                          <h3>
                            <Link href={`/blog-details/${value.node.slug}`}>
                              {value.node.title}
                            </Link>
                          </h3>
                          <span className="date">
                            {value.node.author.node.name}
                          </span>
                          {/* <div
                            dangerouslySetInnerHTML={{
                              __html: value.node.content,
                            }}
                          /> */}

                          <Link
                            href={`/blog-details/${value.node.slug}`}
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
                    {pageInfo?.hasPreviousPage && (
                      <a
                        className="prev page-numbers"
                        onClick={() => setPostsData({ last: perPagePosts, before: pageInfo?.startCursor})}
                      >
                        <i className="fa-solid fa-angles-left"></i>
                      </a>
                    )}
                    {pageInfo?.hasNextPage && (
                      <a
                        className="next page-numbers"
                        onClick={() => setPostsData({ first: perPagePosts, after: pageInfo?.endCursor})}
                      >
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    )}
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
