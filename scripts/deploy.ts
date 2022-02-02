import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Token, Token__factory, UniswapAdapter, UniswapAdapter__factory } from "../typechain-types";

async function main() {
  const [owner] = await ethers.getSigners();
  const factoryRinkeby = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"
  const routerRinkeby = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
  // const tokenFirst = await getTokenContract(owner, "TokenF", "TNF");
  // const tokenSecond = await getTokenContract(owner, "TokenS", "TNS");
  const adapter = await getAdapterContract(owner, factoryRinkeby, routerRinkeby);

  // console.log("tokenFirst deployed to:", tokenFirst.address);
  // console.log("tokenSecond deployed to:", tokenSecond.address);
  console.log("adapter deployed to:", adapter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


async function getTokenContract(owner: SignerWithAddress, name: string, symbol: string) {
  const tokenFactory = new Token__factory(owner);
  const tokenContract = await tokenFactory.deploy(name, symbol);
  await tokenContract.deployed();

  return tokenContract;
}

async function getAdapterContract(owner: SignerWithAddress, factoryContractAddress: string, routerContractAddress: string) {
  const tokenFactory = new UniswapAdapter__factory(owner);
  const tokenContract = await tokenFactory.deploy(factoryContractAddress, routerContractAddress);
  await tokenContract.deployed();

  return tokenContract;
}
