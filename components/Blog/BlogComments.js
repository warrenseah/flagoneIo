import React, { useState } from "react";
import Link from "next/link";
import CommentsForm from "./CommentsForm";
import { formatDateTime, formatTitle } from "../../utils/formatting";

const BlogComments = ({ commentOn, comments, commentCount }) => {
  const [commentId, setCommentId] = useState(null);
  const [commentOnState, setCommentOnState] = useState(commentOn);
  // optimize inner listing of replies
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">{`${commentCount} Comments:`}</h3>

        <ol className="comment-list">
          {comments && comments.nodes ? (
            comments.nodes.map((comment) => {
              if (comment.parentId) return;
              return (
                <li className="comment">
                  <article className="comment-body">
                    <footer className="comment-meta">
                      <div className="comment-author vcard">
                        <img
                          src={comment.author.node.avatar.url}
                          className="avatar"
                          alt="image"
                        />
                        <b className="fn">
                          {formatTitle(comment.author.node.name)}
                        </b>
                        <span className="says">says:</span>
                      </div>

                      <div className="comment-metadata">
                        {formatDateTime(comment.date)}
                      </div>
                    </footer>

                    <div className="comment-content">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: comment.content,
                        }}
                      />
                    </div>

                    <div className="reply">
                      <Link
                        href="#email-notes"
                        className="comment-reply-link"
                        onClick={() => {
                          setCommentId(comment.commentId);
                          setCommentOnState(
                            comment.commentedOn.node.databaseId
                          );
                        }}
                      >
                        Reply
                      </Link>
                    </div>
                  </article>

                  <ol className="children">
                    {comment.replies.nodes.map((reply) => {
                      return (
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <img
                                  src={reply.author.node.avatar.url}
                                  className="avatar"
                                  alt="image"
                                />
                                <b className="fn">
                                  {formatTitle(reply.author.node.name)}
                                </b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                <a href="#">{formatDateTime(reply.date)}</a>
                              </div>
                            </footer>

                            <div className="comment-content">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: reply.content,
                                }}
                              />
                            </div>

                            <div className="reply">
                              <Link
                                href="#email-notes"
                                className="comment-reply-link"
                                onClick={() => {
                                  setCommentId(reply.commentId);
                                  setCommentOnState(
                                    reply.commentedOn.node.databaseId
                                  );
                                }}
                              >
                                Reply
                              </Link>
                            </div>
                          </article>
                          <ol className="children">
                            {reply.replies.nodes.map((innerFirstReply) => {
                              return (
                                <li className="comment">
                                  <article className="comment-body">
                                    <footer className="comment-meta">
                                      <div className="comment-author vcard">
                                        <img
                                          src={
                                            innerFirstReply.author.node.avatar
                                              .url
                                          }
                                          className="avatar"
                                          alt="image"
                                        />
                                        <b className="fn">
                                          {formatTitle(innerFirstReply.name)}
                                        </b>
                                        <span className="says">says:</span>
                                      </div>

                                      <div className="comment-metadata">
                                        <a href="#">
                                          {formatDateTime(innerFirstReply.date)}
                                        </a>
                                      </div>
                                    </footer>

                                    <div className="comment-content">
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: innerFirstReply.content,
                                        }}
                                      />
                                    </div>

                                    <div className="reply">
                                      <Link
                                        href="#email-notes"
                                        className="comment-reply-link"
                                        onClick={() => {
                                          setCommentId(
                                            innerFirstReply.commentId
                                          );
                                          setCommentOnState(
                                            innerFirstReply.commentedOn.node
                                              .databaseId
                                          );
                                        }}
                                      >
                                        Reply
                                      </Link>
                                    </div>
                                  </article>
                                </li>
                              );
                            })}
                          </ol>
                        </li>
                      );
                    })}
                  </ol>
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ol>

        {/* CommentsForm */}
        <CommentsForm commentOn={commentOnState} commentId={commentId} />
      </div>
    </>
  );
};

export default BlogComments;
