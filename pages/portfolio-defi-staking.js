import React from "react";
import SinglePageNavBarDark from "../components/Layouts/SinglePageNavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const DefiStaking = () => {
  return (
    <>
      <SinglePageNavBarDark />

      <PageBanner
        pageTitle="DeFi Staking Smart Contract Service"
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
                <h2>We Provide DeFi Staking Services</h2>
                <p>
                  We code Fixed / variable rate staking. Let us know your
                  business crypto logic and we will create a smart contract
                  written in Solidity to account for all on-chain activites. The
                  smart contract will account for all crypto receive and channel
                  the funds and get them to work. The yields will then be
                  distributed by to the contributors.
                </p>

                <h2>Core Development</h2>
                <p>
                  We will kick-start your deFi development journey by drafting
                  out a smart contract strategy that suits your business logic
                  in a scaleable way. The smart contract actions will be
                  integrated into a web framework like NextJS/ReactJs via
                  Metamask. This will allow web visitors to interact with the
                  smart contract and participate in your DeFi project. We will
                  assist you throughout the entire rollout process - from
                  development (unit testing) to testnet to mainnet, deploying
                  the final solution on any compatible blockchain. Smart
                  contract optimization such as gas optimization so that user
                  will pay minimal transaction fees with your smart contract.
                </p>

                <h2>Choose Transparency, Use Smart Contracts</h2>
                <p>
                  Integrate smart contracts into your business. It brings data
                  and your business transparency and accountability to the next
                  level when you publish it on the blockchain.
                </p>
              </div>

              <div className="service-details-info">
                <div className="single-info-box">
                  <h4>Client</h4>
                  <span>TokenClan</span>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <span>DeFi, Staking, Smart Contracts</span>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <span>October 19, 2022</span>
                </div>

                <div className="single-info-box">
                  <h4>Share</h4>
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/kryptotrees"
                        title="kyrptoTrees fb"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/KryptoTreesNFT"
                        title="kyrptoTrees Twitter"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/EwybaHdp"
                        title="kyrptoTrees Discord"
                        target="_blank"
                      >
                        <i className="fa-brands fa-discord"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <a
                    href="https://testnet.bscscan.com/address/0x8a1f638791aed3514d72543d3698dfea0096cd6d"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Contract Address Preview (Bnb chain Testnet)
                  </a>
                  <a
                    href="https://timely-marshmallow-62bc3f.netlify.app"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Preview
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

export default DefiStaking;
