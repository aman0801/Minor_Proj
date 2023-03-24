const hre = require("hardhat");

async function main() {
  const Vote = await hre.ethers.getContractFactory("Voting");
  const contract = await Vote.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

main();