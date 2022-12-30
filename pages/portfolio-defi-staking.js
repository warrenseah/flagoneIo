import React from "react";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const DefiStaking = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner
        pageTitle="DeFi Staking Smart Contract"
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
                <h2>DeFi Staking</h2>
                <p>
                  The customized smart contract will account for all crypto
                  receive and channel the funds based on the business logic
                  provided. The yields will then be distributed back to the
                  contributors based on their crypto deposited into the pool.
                </p>

                <h2>Core Development</h2>
                <p>
                  We will kick-start your deFi development journey by drafting
                  out a smart contract strategy that suits your business logic
                  in a scaleable way. The smart contract can receive any native
                  token like eth or bnb. In addition, any erc20 tokens can also
                  be used to collect as deposit. The staking yield will be
                  accounted for the amount and total time deposited into the
                  smart contract. When the yield is ready, the defi user will
                  redeem their share of yield from the pool. They can stake and
                  unstake at any point during the yield process. Unstaking will
                  take a period of 7 days before their deposited crypto can be
                  fully withdrawn.
                </p>

                <h2>BNB Charger Smart Contract</h2>
                <p>
                  The smart contract will accept BNB from user deposits. The
                  deposited funds will be channeled into Binance.com to
                  participate in their crypto exchange activities. The yields
                  will then be fairly distributed back to the crypto depositors.
                  The yields generated are altcoins other than BNB. The same
                  amount of BNB will then be used repeatedly in subsequent
                  exchange activities to farm for more tokens. The smart
                  contract charge two type of fees. One fee is a admin fee that
                  is charged of the user deposited BNB. The other fee is a
                  profit sharing fee which is charged based off the amount of
                  token yield farmed.
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
                        href="https://www.youtube.com/c/TokenClan"
                        title="TokenClan youtube"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/tokenclanio"
                        title="TokenClan facebook"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/warrenseah/vault-v1"
                        title="BNB Charger Github"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <a
                    href="https://github.com/warrenseah/vault-v1"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    GitHub Repo
                  </a>
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
