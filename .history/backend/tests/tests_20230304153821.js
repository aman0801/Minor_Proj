// const { ethers } = require("ethers");

// describe("Voting contract", function() {
//   let contract;
//   let owner;
//   let voter1;
//   let voter2;

//   beforeEach(async () => {
//     // Deploy the contract
//     const Voting = await ethers.getContractFactory("voting");
//     contract = await Voting.deploy();
//     await contract.deployed();

//     // Get signers
//     const [ownerSigner, voter1Signer, voter2Signer] = await ethers.getSigners();
//     owner = ownerSigner.address;
//     voter1 = voter1Signer.address;
//     voter2 = voter2Signer.address;
//   });

//   it("should allow casting a vote", async function() {
//     await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");

//     // Verify the vote was cast
//     const voteCasted = await contract.votes(voter1);
//     expect(voteCasted).to.equal(true);
//   });

//   it("should not allow casting multiple votes", async function() {
//     await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");
//     await expect(
//       contract.connect(ethers.provider.getSigner(voter1)).castVote("Congress")
//     ).to.be.revertedWith("You have already voted");
//   });

//   it("should return the winner", async function() {
//     await contract.connect(ethers.provider.getSigner(voter1)).castVote("BJP");
//     await contract.connect(ethers.provider.getSigner(voter2)).castVote("BJP");
//     await contract.connect(ethers.provider.getSigner(owner)).castVote("Congress");

//     const winner = await contract.getWinner();
//     expect(winner).to.equal("BJP");
//   });
// });
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Get Winner", function () {
  it("Should get the winner correctly", async function () {
    // Deploy the contract
    const Voting = await ethers.getContractFactory("Voting");
    const VotingContract = await Voting.deploy();
    await VotingContract.deployed();
    console.log("Deployed to:",VotingContract.address);

    const [_, addr1,addr2,addr3] = await ethers.getSigners();

    let tx1 = await VotingContract.connect(addr1).castVote("Manisha");
    tx1.wait();
    
    let tx2 = await VotingContract.connect(addr2).castVote("Rishika");
    tx2.wait();

    let tx3 = await VotingContract.connect(addr3).castVote("Manisha");
    tx3.wait();

    let result = await VotingContract.connect(addr1).getWinner();
    console.log("The winner is", result);

    expect(result).to.equal("Manisha");

  });
});

describe("Return", function () {
    it("Should produce error for casting vote 2nd time", async function () {
      // Deploy the contract
      const Voting = await ethers.getContractFactory("Voting");
      const VotingContract = await Voting.deploy();
      await VotingContract.deployed();
      console.log("Deployed to:",VotingContract.address);
  
      const [_, addr1,addr2,addr3] = await ethers.getSigners();
  
      let tx1 = await VotingContract.connect(addr1).castVote("");
      tx1.wait();
      
      let tx2 = await VotingContract.connect(addr2).castVote("Rishika");
      tx2.wait();
  
      try{
        let tx3 = await VotingContract.connect(addr1).castVote("Manisha");
        tx3.wait();
    }catch{
        expect(VotingContract.connect(addr1).castVote("Manisha")).to.be.revertedWith('You have already voted');
    }
  
  
    });
  });

  describe("Tie", function () {
    it("Should give tie as the output", async function () {
      // Deploy the contract
      const Voting = await ethers.getContractFactory("Voting");
      const VotingContract = await Voting.deploy();
      await VotingContract.deployed();
      console.log("Deployed to:",VotingContract.address);
  
      const [_, addr1,addr2,addr3,addr4] = await ethers.getSigners();
  
      let tx1 = await VotingContract.connect(addr1).castVote("Manisha");
      tx1.wait();
      
      let tx2 = await VotingContract.connect(addr2).castVote("Rishika");
      tx2.wait();
  
      let tx3 = await VotingContract.connect(addr3).castVote("Manisha");
      tx3.wait();

      let tx4 = await VotingContract.connect(addr4).castVote("Rishika");
      tx4.wait();
  
      let result = await VotingContract.connect(addr1).getWinner();
      console.log("The winner is", result);
  
      expect(result).to.equal("Tie");
  
    });
  });