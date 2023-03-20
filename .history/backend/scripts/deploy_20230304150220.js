const { expect } = require("chai");

describe("Voting", function() {
  let voting;

  beforeEach(async function() {
    const Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy();
    await voting.deployed();
  });

  it("should allow a participant to cast a vote", async function() {
    const participant = await ethers.provider.getSigner(0);
    const candidate = "BJP";

    await voting.connect(participant).castVote(candidate);

    expect(await voting.votes(participant.getAddress())).to.equal(true);
  });

  it("should not allow a participant to vote twice", async function() {
    const participant = await ethers.provider.getSigner(0);
    const candidate = "Congress";

    await voting.connect(participant).castVote(candidate);

    await expect(voting.connect(participant).castVote(candidate)).to.be.revertedWith("You have already voted");
  });

  it("should return the correct winner", async function() {
    const participant1 = await ethers.provider.getSigner(0);
    const participant2 = await ethers.provider.getSigner(1);
    const candidate1 = "BJP";
    const candidate2 = "Congress";

    await voting.connect(participant1).castVote(candidate1);
    await voting.connect(participant2).castVote(candidate2);

    expect(await voting.getWinner()).to.equal("Tie");
  });
});
