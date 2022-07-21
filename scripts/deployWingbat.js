
const hre = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Wingbat = await hre.ethers.getContractFactory("Wingbat");
  const wingbat = await Wingbat.deploy();

  await wingbat.deployed();

  console.log("Wingbat deployed to:", wingbat.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
