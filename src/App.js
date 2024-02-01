import React from 'react';
import './App.css';
import ConnectButton from './components/ConnectButton';
import WithdrawButton from './components/WithdrawButton';

function App() {
  const contractAddress = '0x97A6B774c9acb225723B61d140f9ED5F6126E4ea';
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
