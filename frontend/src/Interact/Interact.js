import React from 'react'

export const Interact = () => {
  const API_KEY = process.env.API_KEY;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

  const contract = require("../contracts/voting.json");

  // provider - Alchemy
  const alchemyProvider = new ethers.providers.AlchemyProvider(network = "goerli", API_KEY);

  // signer - you
  const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
  
  // contract - instance of the contract
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
  

  console.log(JSON.stringify(contract.abi));
  return (
    <div>Interact</div>
  )
}
