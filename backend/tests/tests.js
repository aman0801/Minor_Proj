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
  
      let tx1 = await VotingContract.connect(addr1).castVote("Manisha");
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