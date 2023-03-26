const { ethers } = require('ethers');
const Voting = require('../artifacts/contracts/voting.sol/voting.json'); // Replace with the path to your compiled contract's JSON file


describe('Voting Contract', function() {
  let provider;
  let signer;
  let votingContract;

  before(async function() {
    // Connect to Goerli network
    provider = new ethers.providers.AlchemyProvider('https://eth-goerli.g.alchemy.com/v2/MtpxgeGeX_KHdwuH3FCldkgk4HaCtpGM');

    signer = new ethers.Wallet('8944e5699a4b6661afd355e2e7d19cc6793ec769c8d1aa0cfd15ab41f555d328', provider);

    // Deploy the contract
    const VotingFactory = new ethers.ContractFactory(Voting.abi, Voting.bytecode, signer);
    votingContract = await VotingFactory.deploy();
    await votingContract.deployed();
  });

  it('should return the correct winner', async function() {
    // Cast some votes
    await votingContract.castVote('Narendra Modi');
    await votingContract.castVote('Arvinda Kejriwal');
    await votingContract.castVote('Arvinda Kejriwal');

    // Get the winner
    const winner = await votingContract.getWinner();
    assert.equal(winner, 'Arvinda Kejriwal', 'Wrong winner');
  });

  it('should return the correct number of votes for Narendra Modi', async function() {
    // Cast some votes
    await votingContract.castVote('Narendra Modi');
    await votingContract.castVote('Narendra Modi');
    await votingContract.castVote('Arvinda Kejriwal');

    // Get the number of votes for Narendra Modi
    const votes = await votingContract.getVotes('Narendra Modi');
    assert.equal(votes, 2, 'Wrong number of votes');
  });
});
