import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import 'solidity-coverage'
import "@nomiclabs/hardhat-etherscan"

require('@nomiclabs/hardhat-ethers');

require('dotenv').config()
// require('./tasks')

const chainIds: { [key: string]: number } = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3
}

// Ensure that we have all the environment variables we need.
let mnemonic: string
if (!process.env.MNEMONIC) {
  // throw new Error('Please set your MNEMONIC in a .env file')
} else {
  mnemonic = process.env.MNEMONIC
}

let infuraApiKey: string
if (!process.env.INFURA_API_KEY) {
  // throw new Error('Please set your INFURA_API_KEY in a .env file')
} else {
  infuraApiKey = process.env.INFURA_API_KEY
}

function createNetworkConfig(network: string) {
  const url = 'https://' + network + '.infura.io/v3/' + infuraApiKey
  return {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chainIds[network],
    url,
    gas: 'auto',
    gasPrice: 60000000000
  }
}

module.exports = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: process.env.SCAN_API_KEY
  },
  networks: {
    hardhat: {
      // accounts: {
      //   mnemonic,
      // },
      chainId: chainIds.hardhat,
    },
    // mainnet: createNetworkConfig('mainnet'),
    // goerli: createNetworkConfig('goerli'),
    // kovan: createNetworkConfig('kovan'),
    // rinkeby: createNetworkConfig('rinkeby'),
    // ropsten: createNetworkConfig('ropsten'),

    // bsc_testnet: {
    //   url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
    //   chainId: 97,
    //   gasPrice: 'auto',
    //   // gasLimit: 10000000,
    //   accounts: { mnemonic: mnemonic },
    // },
    // bsc: {
    //   url: 'https://bsc-dataseed.binance.org/',
    //   chainId: 56,
    //   gasPrice: 5000000000,
    //   // gasLimit: 10000000,
    //   accounts: { mnemonic: mnemonic },
    // }
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.6',
      },
      {
        version: '0.5.16',
      },
      {
        version: '0.6.6',
      }
    ],
    overrides: {
      '@uniswap/v2-core/contracts/UniswapV2Factory.sol': {
        version: "0.5.16",
      }
    }
  }
}
