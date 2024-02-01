import React from 'react';
import { ethers } from 'ethers';
import requestAccount from './ConnectButton'; // Update the import

const WithdrawButton = ({ contractAddress, contractABI }) => {
  const withdraw = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum); // Update provider creation
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const transaction = await contract.withdraw();
        await transaction.wait();
        console.log('Money withdrawn');
      } catch (err) {
        console.error('Error:', err);
      }
    }
  };

  return (
    <div>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
};

export default WithdrawButton;
