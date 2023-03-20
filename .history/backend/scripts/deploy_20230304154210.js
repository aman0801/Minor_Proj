const { ethers } = require("hardhat");

async function main() {
  
  const Voting = await ethers.getContractFactory("Voting");
  const VotingContract = await Voting.deploy();
  await VotingContract.deployed();
  console.log("Deployed to:",VotingContract.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });