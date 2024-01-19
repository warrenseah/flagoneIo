import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

const dappDev = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Multi Sig Wallet dApp Page</title>
        <meta
          name="description"
          content="Multi Sig Wallet dApp showcase how anyone can create a joint wallet onchain to deploy funds to recipents upon members' approval."
        />
      </Head>
      <NavbarDark />

      <PageBanner
        pageTitle="Multi Sig Wallet dApp"
        BGImage="/images/page-banner2.jpg"
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <Image
                  src="/images/portfolio/portfolio1.jpg"
                  alt="man doing brainstorming image"
                  width="480"
                  height="350"
                  sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                />
              </div>

              <div className="portfolio-details-image">
                <Image
                  src="/images/portfolio/coding.jpg"
                  alt="doing coding on a laptop image"
                  width="480"
                  height="350"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <Image
                  src="/images/portfolio/portfolio3.jpg"
                  alt="workflow flip chart image"
                  width="480"
                  height="700"
                />
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-0">
              <div className="row">
                <div className="col-lg-12 col-md-6 pr_0">
                  <div className="portfolio-details-image">
                    <Image
                      src="/images/portfolio/womanSelecting.jpg"
                      alt="lady selecting on board image"
                      width="480"
                      height="350"
                      sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 pl_0">
                  <div className="portfolio-details-image">
                    <Image
                      src="/images/portfolio/teamWorking.jpg"
                      alt="team working together image"
                      width="480"
                      height="350"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-desc">
                <h2>Multi Sig Wallet</h2>
                <p>
                  A multi-signature (multi-sig) wallet is a type of
                  cryptocurrency wallet that requires multiple approvals to
                  authorize transactions. It adds an extra layer of security by
                  distributing control among multiple parties. Ethereum, a
                  popular blockchain platform, supports multi-sig wallets
                  through smart contracts.
                </p>
                <p>
                  In a multi-sig wallet, a predetermined number of signatories
                  must provide their approval before any transaction/withdrawal
                  can be executed. This number of approvals is represented by
                  the variable quorem.
                </p>

                <h2>Core Benefits</h2>

                <p>
                  The use of multi-sig wallets on Ethereum provides several
                  advantages. First, it mitigates the risk of a single point of
                  failure or compromise. If one wallet is lost or compromised,
                  the funds stored in the wallet remain secure as long as the
                  remaining signatories are trustworthy. Second, multi-sig
                  wallets can be beneficial for organizations or projects that
                  require consensus or shared decision-making for financial
                  transactions.
                </p>

                <h2>Multi Sig Smart Contract</h2>

                <p>
                  Smart contracts play a crucial role in implementing multi-sig
                  wallets on any ethereum virtual machine compatible chains.
                  These self-executing contracts define the rules and conditions
                  for approving transactions. They ensure that transactions are
                  processed only when the required number of approvals is
                  provided.
                </p>
                <p>
                  Overall, multi-sig wallets offer enhanced security and
                  accountability for managing digital assets on any EVM
                  compatible blockchain. They are particularly useful in
                  scenarios where multiple parties need to collaborate or when
                  safeguarding large sums of cryptocurrency.
                </p>

                <h2>Wallet Factory dApp</h2>

                <p>
                  The wallet factory dApp offers a quick way for anyone to
                  deploy their multi-sig wallet and test the features of a multi
                  sign wallet. You can deploy your own wallet by specifying at
                  least 3 unique wallet addresses as approving signatories and
                  at least 2 amount of approvals required (quorum) on the
                  Ethereum Sepolia testnet.
                </p>
                <p>
                  The easiest way to get started is to download the metamask
                  browser extension. Create a wallet and have the network set to
                  Sepolia Ethereum testnet. Get some sepolia test ether{" "}
                  <a href="https://sepoliafaucet.com/" target="_blank">
                    here
                  </a>{" "}
                  because you will need them later at the dApp page. Once you
                  have a wallet on Sepolia testnet ready, visit the{" "}
                  <a
                    href="https://main--sage-squirrel-518549.netlify.app"
                    target="_blank"
                  >
                    Multi Sig Wallet Factory
                  </a>{" "}
                  Page.
                </p>

                <p>
                  The instructions on how to use this dashboard to test the
                  various features of the multi sig wallet on Sepolia testnet
                  can be found at{" "}
                  <a
                    href="https://github.com/warrenseah/multi-sig-wallet-frontend"
                    target="_blank"
                  >
                    dApp github page
                  </a>
                  .
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
                  <span>December 15, 2023</span>
                </div>

                <div className="single-info-link-box">
                  <Link
                    href="https://main--sage-squirrel-518549.netlify.app"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Preview (Ethereum Testnet)
                  </Link>
                  <Link
                    href="https://github.com/warrenseah/multi-sig-wallet"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Smart Contract Github
                  </Link>
                  <Link
                    href="https://github.com/warrenseah/multi-sig-wallet-frontend"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Github
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

export default dappDev;
