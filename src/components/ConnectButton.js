import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

const ConnectButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleConnect = async () => {
    try {
      await requestAccount();
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      const userAddress = accounts[0];
      console.log('Connected to Ethereum. User address:', userAddress);
      setShowModal(true);
    } catch (error) {
      console.error('Error connecting to Ethereum:', error.message);
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Button variant="success" onClick={handleConnect}>
        Connect to Ethereum
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#28a745', color: '#fff' }}>
          <Modal.Title>Connected to Ethereum</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          User address: <strong>098765432108765x3fgt</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConnectButton;
