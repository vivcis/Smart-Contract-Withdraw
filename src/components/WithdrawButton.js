import React from 'react';
import { ethers } from 'ethers';
import requestAccount from './ConnectButton'; 

const WithdrawButton = ({ contractAddress, contractABI }) => {
    const withdraw = async () => {
      try {
        await requestAccount();
  
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
          // Check if the withdraw function exists in the contract ABI
          if (contractABI.some((item) => item.name === 'withdraw')) {
            const transaction = await contract['withdraw']();
            await transaction.wait();
            console.log('Money withdrawn');
          } else {
            console.error('Withdraw function not found in contract ABI');
          }
        }
      } catch (err) {
        console.error('Error:', err);
      }
    };
  
    return (
      <div>
        <button onClick={withdraw}>Withdraw</button>
      </div>
    );
  };
  
  export default WithdrawButton;