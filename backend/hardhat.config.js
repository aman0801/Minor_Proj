require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */ 
module.exports = {
  solidity: "0.8.18",
  networks: {
    
    goerli: {
      url: process.env.GOERLI_URL,
      chainid:'5',
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};
//Contract deployed to: 0x5f57daf5508DD7886BAcDbC888B81466B307B177