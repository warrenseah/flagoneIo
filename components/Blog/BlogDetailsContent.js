import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import BlogComments from "./BlogComments";
import { formatDate } from "../../utils/formatting";

const BlogRightSidebar = ({ post }) => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-img">
                  {post?.featuredImage?.node?.sourceUrl && (
                    <img
                      src={post?.featuredImage?.node?.sourceUrl}
                      alt="image"
                    />
                  )}
                </div>

                <div className="article-content">
                  <ul className="entry-meta">
                    <li>
                      <i className="fa-solid fa-user"></i>
                      <Link href="/blog">{post?.author?.node?.name}</Link>
                    </li>
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>{" "}
                      {formatDate(post.date)}
                    </li>
                  </ul>

                  <div dangerouslySetInnerHTML={{ __html: post.content }} />

                  {/* <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote> */}

                  {/* <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>

                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat.
                  </p>

                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus.
                  </p> */}

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
                    {/* <li>
                      <Link href="/blog">
                        IT
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Tips
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Design
                      </Link>
                    </li> */}
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

              <BlogComments />
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
