require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.0",
    networks: {
        sepolia: {
            url: "https://sepolia.infura.io/v3/2c337f1fa32f458eb52a65862c583aff",
            accounts: ["bb281c3a5a0e6951bc3d627614c017fd347d4114db27fc23c043a221847c2e21"],
        },
    },
};
