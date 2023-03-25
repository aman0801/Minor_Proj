const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("D:\Minor_Proj\frontend\src\contracts\voting.json");

console.log(JSON.stringify(contract.abi));