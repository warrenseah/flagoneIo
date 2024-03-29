import React from "react";
import Link from "next/link";

const CtaArea = () => {
  return (
    <>
      <div className="cta-area bg-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <div className="cta-content">
                <h3>Have a project in mind?</h3>
                <p>Get your complimentary consultation with our team.</p>
              </div>
            </div>

            <div
              className="col-lg-5 col-md-4"
              data-aos="zoom-in-left"
              data-aos-duration="1200"
            >
              <div className="cta-btn-box">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaArea;
