import React, { useState } from "react";
import Image from "next/image";

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="services-details-image">
                <Image
                  src="/images/services/single-service.jpg"
                  alt="dApp development image"
                  width="1250"
                  height="703"
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                <h2>Services</h2>
                <p>
                  From token integration to frictionless UX designs, Flag One
                  provides end-to-end dApp development services. In smart
                  contract development, FlagOne provides custom coding support
                  for ERC-721, ERC-1155 and most OpenZeppelin token standards.
                </p>
                <h2>Development Workflow</h2>
                <p>
                  Consultation will first happened to understand the needs for
                  the business. Once details for the assets tokenization are
                  established, we will start smart contract development. It will
                  be developed under a framework like Hardhat where a local
                  blockchain can be spinned up quickly for testing and gas
                  optimization to be carried. Once block testing of smart
                  contract is finished, we will deploy into a testnet blockchain
                  network. Then a website developed with ReactJS will begin. It
                  will be integrated with Metamask so that the user on the
                  website can easily interact with the developed smart
                  contracts. When every steps listed above are carried out
                  successfully, the final step will be to deploy onto main net
                  to go live.
                </p>
                <h2>Start Your Web3 Journey with Flag One</h2>
                <p>
                  Since 2008, Flag One has been developing fintech applications.
                  By 2021, Flag One shifted his core development focus to dApp /
                  crypto development. During this time, we have deployed over 3
                  dApps on Ethereum. Flag One offers end-to-end dApp
                  development, including smart contracts, frontend, backend, and
                  design. Our dApp development process ensures that we are
                  capable of abstracting the complexity of the blockchain and
                  frontend web design.
                </p>
                <p>
                  Integrate smart contracts into your business by bringing your
                  business data and logic into the blockchain. Become an early
                  adopter of web3! Don't wait any longer, start preparing for
                  the major shift to Web3 by starting your first step with
                  FlagOne today!
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="services-details-info">
                <h3>Programming Technologies</h3>
                <ul>
                  <li>Javascript</li>
                  <li>Sql</li>
                  <li>Git</li>
                  <li>NodeJS</li>
                  <li>Hardhat / TruffleJS</li>
                  <li>Solidity</li>
                  <li>EtherJS / Web3JS</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
