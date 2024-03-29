// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MySmartContract {
    uint256 public data;

    // Constructor that initializes the 'data' variable
    constructor(uint256 initialData) {
        data = initialData;
    }

    function setData(uint256 _data) external {
        data = _data;
    }

    function getData() external view returns (uint256) {
        return data;
    }

    // Withdraw function to transfer funds to the caller
    function withdraw() external {
        require(data > 0, "No funds to withdraw");
        payable(msg.sender).transfer(data);
        data = 0;
    }
}
