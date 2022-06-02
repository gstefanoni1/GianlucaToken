/** @author Stefanoni Gianluca
 * Script that verifies balance of an address
 */
// interact.js Ethereum Ropsten
//Json tht contians key, addresses...
const myJson = require('../process.json')

const FUJI_PRIVATE_KEY = myJson.FUJI_PRIVATE_KEY
const CONTRACT_ADDRESS_FUJI = myJson.CONTRACT_ADDRESS_FUJI
const FUJI_ADDRESS = myJson.FUJI_ADDRESS

const contract = require("../artifacts/contracts/Token.sol/Token.json")
const { ethers } = require('hardhat')
/*console.log(JSON.stringify(contract.abi))*/

// Provider - a node provider that gives you read and write access to the blockchain
const nodeURL = "https://api.avax-test.network/ext/bc/C/rpc";
const HTTPSProvider = new ethers.providers.JsonRpcProvider(nodeURL);

// Signer - represents an Avalanche account that can sign transactions
const signer = new ethers.Wallet(FUJI_PRIVATE_KEY, HTTPSProvider)

// Contract - an Ethers.js object representing a specific contract deployed on-chain
const TokenContract = new ethers.Contract(CONTRACT_ADDRESS_FUJI, contract.abi, signer)

// Method that allows access to all contract's public methods
async function main() {
    const balance = await TokenContract.balanceOf(FUJI_ADDRESS)
    console.log("The balance of " + FUJI_ADDRESS + " is: " + balance)
  }
main()