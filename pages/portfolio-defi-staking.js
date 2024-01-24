import React from "react";
import Head from "next/head";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import PortfolioDetailsImages from "../components/Portfolio/PortfolioDetailsImages";

const DefiStaking = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Portfolio Staking Page</title>
        <meta
          name="description"
          content="Staking portfolio page serves as great idea starting point for whomever wanna land their first step into the world of web3 staking."
        />
      </Head>
      <NavbarDark />

      <PageBanner
        pageTitle="DeFi Staking Smart Contract"
        BGImage="/images/page-banner2.jpg"
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <PortfolioDetailsImages
            colOneImages={[
              {
                src: "/images/portfolio/defi-staking-8.jpg",
                alt: "defi-staking 1",
                height: "350",
                width: "480",
              },
              {
                src: "/images/portfolio/defi-staking-2.jpg",
                alt: "defi-staking 2",
                height: "350",
                width: "480",
              },
            ]}
            colTwoImages={[
              {
                src: "/images/portfolio/defi-staking-10.jpg",
                alt: "defi-staking 10",
                height: "700",
                width: "480",
              },
            ]}
            colThreeImages={[
              {
                src: "/images/portfolio/defi-staking-7.jpg",
                alt: "defi-staking 7",
                height: "350",
                width: "480",
              },
              {
                src: "/images/portfolio/defi-staking-1.jpg",
                alt: "defi-staking 7",
                height: "350",
                width: "480",
              },
            ]}
          />

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

                <div className="single-info-link-box">
                  <Link
                    href="https://github.com/warrenseah/vault-v1"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    GitHub Repo
                  </Link>
                  <Link
                    href="https://testnet.bscscan.com/address/0x8a1f638791aed3514d72543d3698dfea0096cd6d"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Contract Address Preview (Bnb chain Testnet)
                  </Link>
                  <Link
                    href="https://timely-marshmallow-62bc3f.netlify.app"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Preview
                  </Link>
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
