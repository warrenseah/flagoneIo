import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="ptb-100 pb-70 overflow-hidden">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-12 col-md-12">
              <div className="section-title text-start">
                <span className="sub-title">Pricing Table</span>
                <h2>No Hidden Charge Applied, Choose Your Plan</h2>
              </div>
            </div>

            <div className="col-xl-8 col-lg-12 col-md-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div
                    className="software-pricing-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <h3>Small Team</h3>
                    <p>Powerful & awesome elements</p>
                    <div className="price">
                      $49<span>/Monthly</span>
                    </div>
                    <Link href="/contact">
                      <a className="software-btn">
                        Purchage Plan{" "}
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                    <ul className="features-list">
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Up to 10 Website
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Lifetime Free Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        10 GB Dedicated Hosting Free
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        24/7 Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        SEO Optimized
                      </li>
                      <li className="close">
                        <i className="fa-solid fa-delete-left"></i>
                        Live Support
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div
                    className="software-pricing-box"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <h3>Business Plan</h3>
                    <p>Powerful & awesome elements</p>
                    <div className="price">
                      $69<span>/Monthly</span>
                    </div>
                    <Link href="/contact">
                      <a className="software-btn">
                        Purchage Plan{" "}
                        <i className="fa-solid fa-angles-right"></i>
                      </a>
                    </Link>
                    <ul className="features-list">
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Up to 80 Website
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Lifetime Free Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        80 GB Dedicated Hosting Free
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        24/7 Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        SEO Optimized
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        Live Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
