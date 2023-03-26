const main = async () => {
  const vote = await ethers.getContractFactory("voting");
  const contract = await vote.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
runMain();
