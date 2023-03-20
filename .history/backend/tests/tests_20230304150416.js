const { ethers } = require("ethers");

describe("Voting contract", function() {
  let contract;
  let owner;
  let voter1;
  let voter2;

  beforeEach(async () => {
    // Deploy the contract
    const Voting = await ethers.getContractFactory("Voting");
    
    contract = await Voting.deploy();
    await contract.deployed();

    // Get signers
    const [ownerSigner, voter1Signer, voter2Signer] = await ethers.getSigners();
    owner = ownerSigner.address;
    voter1 = voter1Signer.address;
    voter2 = voter2Signer.address;
  });

  it("should allow casting a vote", async function() {
    await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");

    // Verify the vote was cast
    const voteCasted = await contract.votes(voter1);
    expect(voteCasted).to.equal(true);
  });

  it("should not allow casting multiple votes", async function() {
    await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");
    await expect(
      contract.connect(ethers.provider.getSigner(voter1)).castVote("Congress")
    ).to.be.revertedWith("You have already voted");
  });

  it("should return the winner", async function() {
    await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");
    await contract.connect(ethers.provider.getSigner(voter2)).castVote("BJP");
    await contract.connect(ethers.provider.getSigner(owner)).castVote("Congress");

    const winner = await contract.getWinner();
    expect(winner).to.equal("BJP");
  });
});
