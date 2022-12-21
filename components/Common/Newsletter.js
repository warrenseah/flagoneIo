import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const alertSuccessContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your email was successfully added!",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const alertFailedContent = (errorMsg) => {
  MySwal.fire({
    title: "Oops!",
    text: errorMsg,
    icon: "error",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const Newsletter = () => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();

  const emailSubmitHandler = async (e) => {
    e.preventDefault();
    const selectedEmail = emailInputRef.current.value;
    const selectedName = nameInputRef.current.value;
    console.log("Submitted!, email: ", selectedEmail);

    try {
      const url = `/api/sendfox/subscribe`;
      const payload = { email: selectedEmail, first_name: selectedName };
      const response = await axios.post(url, payload);
      // console.log(response);
      if (response.status === 200) {
        alertSuccessContent();
        e.target.reset();
      } else {
        throw new Error("User is not added!");
      }
    } catch (error) {
      console.log(error.message);
      alertFailedContent(error.message);
    }
  };
  return (
    <>
      <div className="newsletter-area">
        <div className="container">
          <div
            className="newsletter-inner-area"
            style={{
              backgroundImage: `url(/images/newsletter-bg.jpg)`,
            }}
          >
            <div className="newsletter-content">
              <span className="sub-title">Get Updates!</span>
              <h2>Get our newsletter delivered to your inbox instantly!</h2>

              <form className="newsletter-form" onSubmit={emailSubmitHandler}>
                <input
                  type="email"
                  className="form-control m-1"
                  placeholder="Enter your email"
                  name="email"
                  required
                  ref={emailInputRef}
                />
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="Enter your first name"
                  name="first_name"
                  required
                  ref={nameInputRef}
                />
                <button type="submit">Subscribe!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
