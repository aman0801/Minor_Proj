// const { ethers } = require("hardhat");

// async function main() {
  
//   const Voting = await ethers.getContractFactory("voting");
//   const VotingContract = await Voting.deploy();
//   await VotingContract.deployed();
//   console.log("Deployed to:",VotingContract.address);
  
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

// scripts/deploy.js
async function main () {
  // We get the contract to deploy
  const Contract = await ethers.getContractFactory('voting');
  // console.log('Deploying Contract...');
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log('Contract deployed to:', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });