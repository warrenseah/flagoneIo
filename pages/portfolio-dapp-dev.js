import React from "react";
import SinglePageNavBarDark from "../components/Layouts/SinglePageNavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const dappDev = () => {
  return (
    <>
      <SinglePageNavBarDark />

      <PageBanner
        pageTitle="dApp Development"
        BGImage="/images/page-banner2.jpg"
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio1.jpg" alt="image" />
              </div>

              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio3.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-0">
              <div className="row">
                <div className="col-lg-12 col-md-6 pr_0">
                  <div className="portfolio-details-image">
                    <img src="/images/portfolio/portfolio4.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 pl_0">
                  <div className="portfolio-details-image">
                    <img src="/images/portfolio/portfolio5.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-desc">
                <h2>dApp Development Services</h2>
                <p>
                  From token integration to frictionless UX designs, Flag one
                  provides end-to-end dApp development services. A dApp's
                  purpose is to offer a solution to users. dApp are powered
                  under a blockchain network with business logic coded into
                  smart contract fully integrated by a frontend framework
                  ReactJS.
                </p>

                <h2>dApp Benefits</h2>
                <p>
                  Decentralized applications have self-executing codes to
                  perform core business logics with automation. dApp data is
                  stored on a public ledger like Ethereum which guarantees that
                  no one can manipulate it. This openness and transparancy in
                  data storage eliminates the need for middlemen which further
                  reduces business operational costs. All codes developed on the
                  dApp are mostly open-source and not proprietary owned. That
                  means dApp maintainance with a new/existing team will not be
                  complicated.
                </p>

                <h2>What it Means for dApp Users</h2>
                <p>
                  dApp users will benefit from reduced costs of participating
                  with a defi provider vs traditional finance provider. With
                  increased transparency, lower costs and higher autonomy to
                  their own data, they will be able to make better decisions for
                  themsevles.
                </p>

                <h2>Building dApps with Flag One</h2>
                <p>
                  Since 2008, Flag One has been developing fintech applications.
                  By 2021, Flag One shifted his core development focus to dApp /
                  crypto development. During this time, we have deployed over 3
                  dApps on Ethereum. Flag One offers end-to-end dApp
                  development, including smart contracts, frontend, backend, and
                  design. Our dApp development process ensures that we are
                  capable of abstracting the complexity of the blockchain and
                  frontend web design. Core programming knowledge stack includes
                  solidity, javascript, nodeJS, ReactJS, NextJS.
                </p>
              </div>

              <div className="service-details-info">
                <div className="single-info-box">
                  <h4>Client</h4>
                  <span>TokenClan</span>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <span>dApp, Smart Contracts, Development</span>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <span>October 19, 2022</span>
                </div>

                <div className="single-info-box">
                  <a
                    href="https://polygon.kryptotrees.com"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Minting dApp Preview
                  </a>
                  <a
                    href="https://timely-marshmallow-62bc3f.netlify.app"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Staking dApp Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default dappDev;
