import React from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";
import './Donor.css'

const Donor = () => {
  return (
    <main className="main">
        <div className="connect">
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
            Get started by donating for a cause and creating a positive impact!
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

export default Donor