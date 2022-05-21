// interact.js Ethereum Ropsten

const ALCHEMY_API_KEY = "j4tru1W1SBPOPXGyl3kqacuUomVy0F6U" //process.env.API_KEY
const ROPSTEN_PRIVATE_KEY = "ec74e52c79601e4353c74baa7947a86dc9376a5faf1f75c76bb5e7b76d7e0e53" //process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = "0x5398dA903b0c067AD12D92AedceA77a942b5077D" //process.env.CONTRACT_ADDRESS
const ROPSTEN_ADDRESS = "0xda4E24d1dF30cC01AE26e11F29FA2eC6A728E4a2" //process.env.ROPSTEN_ADDRESS

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