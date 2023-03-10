import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-map-2"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                  The Plaza, 7500A Beach Road <br /> #07-320, Singapore 199591.
                </p>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="pe-7s-call"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+1234567890">+123 456 7890</a>
                </p>
                <p>
                  <a href="tel:+2414524526">+241 452 4526</a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
