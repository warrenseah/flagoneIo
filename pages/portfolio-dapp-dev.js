import React from "react";
import Head from "next/head";
import Image from "next/image";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";

const dappDev = () => {
  return (
    <>
      <Head>
        <title>FlagOne | dApp Portfolio Page</title>
        <meta
          name="description"
          content="dApp portfolio page serves as great idea starting point for whomever wanna land their first step into the world of web3."
        />
      </Head>
      <NavbarDark />

      <PageBanner
        pageTitle="dApp Development"
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
                <h2>Decentralized Application (dApp)</h2>
                <p>
                  Flag One have provided an NFT minting dApp and a staking dApp
                  as examples here. Basically, a dApp wired smart contract with
                  a website so that users with a web wallet like Metamask will
                  be able to interact and participate directly easily.
                </p>

                <h2>Core Development</h2>
                <p>
                  Popular frontend frameworks like ReactJS or NextJS are
                  commonly used in the web3 community to fire up a responsive
                  and fast-speed website. The website will integrate so that it
                  will work seamlessly with browser extensions or web wallets
                  such as Metamask. The associated smart contract address will
                  be provided in the dApp for users so that they are able to
                  verify and identify the genuine smart contract address
                  whenever interacting with them. At times when the website is
                  down, users can use the smart contract address at block
                  explorer like etherscan or bnbscan to fall back on.
                </p>
                <h2>Minting dApp</h2>
                <p>
                  In kryptoTrees nft minting app, the price for minting an nft
                  is read from the smart contract. Also the available number of
                  un-minted NFT quantity will also be displayed. These figures
                  are updated every time the person visits the page.
                </p>

                <h2>Staking dApp</h2>
                <p>
                  In Bnb charger dApp, visitor is able to deposit BNB via
                  Metamask browser extension into the smart contract on Bnb
                  chain. Subsequently, they will be able to check back from time
                  to time when their deposited crypto generate yields in the
                  form of altcoins. When a yield programme concludes, user will
                  be able to redeem their yields from the dApp. As long as they
                  do not unstake their BNB tokens, their deposited funds will
                  continue to perform yield farming.
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

                <div className="single-info-link-box">
                  <Link href="https://mint.kryptotrees.com" className="default-btn m-1" target="_blank">
                    Minting dApp Preview
                  </Link>
                  <Link
                    href="https://timely-marshmallow-62bc3f.netlify.app"
                    className="default-btn m-1" target="_blank"
                  >
                    Staking dApp Preview
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