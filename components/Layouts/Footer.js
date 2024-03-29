import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                      <img src="/images/f1logo.png" alt="Logo" />
                  </Link>
                </div>

                <p>
                  FlagOne is building the future of digital assets. We educate
                  and help individuals, institutions and brands to produce,
                  trade, collect in digital assets. Experience Web 3.0 Better
                  with FlagOne. We are a member of Singapore Fintech Association
                  (20050024).
                </p>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100057178100785"
                      target="_blank"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/warrenseah" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/warrenseah/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/warrenseah/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget ml-4 pl-5">
                <h3>Explore</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/#aboutUs">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/#ourWorks">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ml-4">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>Get in Touch</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i> The Plaza,
                    7500A Beach Road #07-320, Singapore 199591.
                  </li>
                  {/* <li>
                    <i className="fa-solid fa-headset"></i>
                    <a href="tel:+324-9442-515">+324-9442-515</a> 
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} Flag One Pte Ltd. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
