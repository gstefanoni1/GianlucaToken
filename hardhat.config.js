require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
require("@nomiclabs/hardhat-ethers")

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "j4tru1W1SBPOPXGyl3kqacuUomVy0F6U";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "ec74e52c79601e4353c74baa7947a86dc9376a5faf1f75c76bb5e7b76d7e0e53";

//Avalanche private key
const FUJI_PRIVATE_KEY = "0x4e59c1e3356b86785119ed4cae22d679b25ed2719561bbfc2dccc7b40860cc26";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.14",
  etherscan: {
    apiKey: "8YAH8PVDBZFB9AGMIFK6IY9T8A2J3DQKEY"
  },
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    },

    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`${FUJI_PRIVATE_KEY}`],
    }
  }
};
