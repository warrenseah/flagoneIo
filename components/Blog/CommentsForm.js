import React, { Component, useState } from "react";
import { createComment } from "../../pages/api/comment";
import { removeEmpty } from "../../utils/formatting";

const CommentsForm = ({commentOn, commentId}) => {
  const [formState, setFormState] = useState({
    commentOn: null,
    content: null,
    author: null,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if(commentId) {
      formState.parent = commentId;
    }
    formState.commentOn = commentOn
    createComment(removeEmpty(formState));
  };
  return (
    <>
      <div className="comment-respond">
        <h3 className="comment-reply-title">Leave a Reply</h3>

        <form className="comment-form" onSubmit={handlesubmit}>
          <div className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
            Required fields are marked <span className="required">*</span>
          </div>

          <div className="comment-form-comment mb-3">
            <label>Comment</label>
            <textarea
              name="content"
              id="comment"
              rows="5"
              required="required"
              defaultValue={formState.content}
              onChange={handleChange}
            />
          </div>

          <div className="comment-form-author mb-3">
            <label>
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="author"
              name="author"
              required="required"
              defaultValue={formState.author}
              onChange={handleChange}
            />
          </div>

          <div className="comment-form-email mb-3">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="authorEmail"
              required="required"
              defaultValue={formState.authorEmail}
              onChange={handleChange}
            />
          </div>

          {/* <div className="comment-form-url mb-3">
            <label>Website</label>
            <input hidden type="url" id="url" name="url" defaultValue={window} />
          </div> */}

          {/* <div className="comment-form-cookies-consent mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                defaultValue={formState.authorEmail}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
          </div> */}

          <div className="form-submit">
            <input
              type="submit"
              name="submit"
              id="submit"
              className="submit"
              value="Post A Comment"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
