// interact.js Ethereum Ropsten
//Json tht contians key, addresses...
const myJson = require('../process.json')

const ALCHEMY_API_KEY =  myJson.ALCHEMY_API_KEY
const ROPSTEN_PRIVATE_KEY = myJson.ROPSTEN_PRIVATE_KEY
const CONTRACT_ADDRESS = myJson.CONTRACT_ADDRESS
const ROPSTEN_ADDRESS = myJson.ROPSTEN_ADDRESS

const contract = require("../artifacts/contracts/Token.sol/Token.json")
/*console.log(JSON.stringify(contract.abi))*/

// Provider - a node provider that gives you read and write access to the blockchain
const alchemyProvider = new ethers.providers.AlchemyProvider((network = "ropsten"), ALCHEMY_API_KEY)

// Signer - represents an Ethereum account that can sign transactions
const signer = new ethers.Wallet(ROPSTEN_PRIVATE_KEY, alchemyProvider)

// Contract - an Ethers.js object representing a specific contract deployed on-chain
const TokenContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer)

// Method that allows access to all contract's public methods
async function main() {
    const balance = await TokenContract.balanceOf(ROPSTEN_ADDRESS)
    console.log("The balance of " + ROPSTEN_ADDRESS + " is: " + balance)
  }
main()