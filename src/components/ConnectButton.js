import React from 'react';

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

const ConnectButton = () => {
  const handleConnect = async () => {
    try {
      await requestAccount();
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const userAddress = accounts[0];
      console.log('Connected to Ethereum. User address:', userAddress);
    } catch (error) {
      console.error('Error connecting to Ethereum:', error.message);
    }
  };

  return (
    <button onClick={handleConnect}>Connect to Ethereum</button>
  );
};

export default ConnectButton;
