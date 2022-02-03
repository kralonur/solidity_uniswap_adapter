npx hardhat run scripts/deploy.ts --network rinkeby

npx hardhat verify --network rinkeby --constructor-args arguments-tokenfirst.js 0xcB8fb2438A805664cD8c3e640b85AC473DA5BE87 

npx hardhat verify --network rinkeby --constructor-args arguments-tokensecond.js 0xF1991E287352A0bB87d00fF8060701D6Afd3033c

npx hardhat verify --network rinkeby --constructor-args arguments-adapter.js 0xF5AbBA00b46796Af008A991FD6E276cB77B6948E