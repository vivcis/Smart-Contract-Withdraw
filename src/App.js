import React from 'react';
import './App.css';
import ConnectButton from './components/ConnectButton';
import WithdrawButton from './components/WithdrawButton';

function App() {
  const contractAddress = '0x43378F742cf50078836850a7c222227d779dDf5E';
  const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "getData",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Ethereum App</h1>
        <WithdrawButton contractAddress={contractAddress} contractABI={contractABI} />
        <ConnectButton />
      </header>
    </div>
  );
}

export default App;
