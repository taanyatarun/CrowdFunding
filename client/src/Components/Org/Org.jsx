import React, { useState } from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";
import './Org.css';
import Axios from 'axios';
import OrganizationCard from './OrganizationCard';

const OrgProfile = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [targetAmount, setTargetAmount] = useState(0);
  const [amountCollected, setAmountCollected] = useState(0);
  const [organization, setOrganization] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('targetAmount', targetAmount);
    formData.append('amountCollected', amountCollected);

    Axios.post('http://localhost:3002/createCampaign', formData)
      .then(response => {
        console.log("Campaign created successfully", response.data);
        setOrganization({
          title: title,
          description: description,
          image: URL.createObjectURL(image),
          targetAmount: targetAmount,
          amountCollected: amountCollected
        });
      })
      .catch(error => {
        console.error("Error creating campaign:", error);
      });
  };

  return (
    <main className="main">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          {/* Your input fields */}
          <div className="inputDiv">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="inputDiv">
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className="inputDiv">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="inputDiv">
            <label htmlFor="targetAmount">Target Amount:</label>
            <input type="number" id="targetAmount" name="targetAmount" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} />
          </div>
          <div className="inputDiv">
            <label htmlFor="amountCollected">Amount Collected:</label>
            <input type="number" id="amountCollected" name="amountCollected" value={amountCollected} onChange={(e) => setAmountCollected(e.target.value)} />
          </div>
          <div className="buttons">
            <button className="btn" type="submit">Submit</button>
          </div>
        </form>
        {organization && <OrganizationCard organization={organization} />}
        {/* Wallet connection button */}
        <ConnectWallet
          // Define props here if any, such as styles or callback functions
        >
          <button className="btn connect-wallet-btn">Connect Wallet</button>
        </ConnectWallet>
      </div>
    </main>
  );
};

export default OrgProfile;
