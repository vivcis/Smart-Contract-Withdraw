const { ethers } = require('hardhat');

async function main() {
    const initialData = 42;
    const MyMessage = await ethers.getContractFactory("MySmartContract");
    const deployedMyMessage = await MyMessage.deploy(initialData);

    await deployedMyMessage.deployed();

    console.log("MySmartContract deployed to:", deployedMyMessage.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
