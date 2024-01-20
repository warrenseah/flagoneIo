import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import BlogComments from "./BlogComments";
import { formatDate, formatTitle } from "../../utils/formatting";

const BlogRightSidebar = ({ post }) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-img">
                    <img
                      src={post?.featuredImage?.node?.sourceUrl ? post?.featuredImage?.node?.sourceUrl : "/images/blog/blog-details.jpg"}
                      alt="image"
                    />
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">{formatTitle(post?.author?.node?.name)}</Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>{" "}
                      {formatDate(post.date)}
                    </li>
                  </ul>

                  <div dangerouslySetInnerHTML={{ __html: post.content }} />

                  {/* Category */}
                  <ul className="category">
                    {post?.tags?.edges?.length > 0 ? (
                      <li>
                        <span>Tags:</span>
                      </li>
                    ) : null}
                    {post?.tags?.edges.map((tag, index) => {
                      return (
                        <li key={index}>
                          <Link key={index} href="/blog">
                            {tag.node.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Post controls */}
              <div className="post-controls-buttons">
                {post.previousPost ? (
                  <div>
                    <Link href={`/blog-details/${post.previousPost.slug}`}>
                      Prev Post
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
                {post.nextPost ? (
                  <div>
                    <Link href={`/blog-details/${post.nextPost.slug}`}>
                      Next Post
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>

              <BlogComments comments={post.comments}commentCount ={post.commentCount} />
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
