import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";

import { Sidebar, Navbar } from "../Components";
import { CampaignDetails, CreateCampaign, Home, Profile } from '.';

const Donor = () => {
  return (

    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      
      <div className="flex-1 absolute inset-x-0 top-0 h-16 m-50 max-sm:w-full sm:pr-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}
        </Routes>
      </div>
      
    </div>
  )
}

export default Donor