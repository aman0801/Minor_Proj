require("@nomiclabs/hardhat-waffle");
require('dotenv').config()
// const key = process.env.key;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async ( hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
      module.exports = {
        networks: {
          goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/lrMLCJc_SMcwseFo2O_Uoppx2YvNuYwL',
            accounts: [process.env.key]
          }
        },
        solidity: "0.8.9",
      };
      
