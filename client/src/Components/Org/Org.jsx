import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import './Org.css';

const Org = () => {
  return (
    <main className="main">
        <div className="">
            <a href="/">Log Out</a>
        </div>
      <div className="container">
        <div className="header">
          <h1 className="title">
            Welcome to{" "}
            <span className="gradient-text-0">
              CoinCause.
            </span>
          </h1>

          <p className="description">
            Your one stop solution for creating and ,managing campaigns!
          </p>

          <div className="connect">
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="login-container card">
          
        </div>
      </div>
    </main>
  )
}

export default Org