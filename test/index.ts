import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { UniswapAdapter, UniswapAdapter__factory, Factory, Factory__factory, Router, Router__factory, Token, Token__factory, UniswapV2Factory, UniswapV2Factory__factory, UniswapV2Router01, UniswapV2Router01__factory } from "../typechain-types";

describe("Bridge", function () {
  let accounts: SignerWithAddress[];
  let owner: SignerWithAddress;
  let adapter: UniswapAdapter;
  let factory: UniswapV2Factory;
  let router: UniswapV2Router01;
  let tokenA: Token;
  let tokenB: Token;

  before(async function () {
    accounts = await ethers.getSigners();
    owner = accounts[0];
  });

  beforeEach(async function () {
    factory = await getFactoryContract(owner);
    adapter = await getAdapterContract(owner, factory.address, factory.address);
    router = await getRouterContract(owner, factory.address, owner.address);
    tokenA = await getTokenContract(owner);
    tokenB = await getTokenContract(owner);
  });

  it("Should create pair", async () => {
    expect(await factory.allPairsLength())
      .equal(0);

    await expect(adapter.createPair(tokenA.address, tokenB.address))
      .to.emit(factory, "PairCreated");

    console.log(await adapter.getPair(tokenA.address, tokenB.address));

    expect(await factory.allPairsLength())
      .equal(1);
  });

  it("Should add liquidity", async () => {
    expect(await factory.allPairsLength())
      .equal(0);

    await expect(adapter.createPair(tokenA.address, tokenB.address))
      .to.emit(factory, "PairCreated");

    await adapter.addLiquidity(tokenA.address, tokenB.address, 100, 100, owner.address);
  });

});

async function getFactoryContract(owner: SignerWithAddress) {
  const tokenFactory = new UniswapV2Factory__factory(owner);
  const tokenContract = await tokenFactory.deploy(owner.address);
  await tokenContract.deployed();

  return tokenContract;
}

async function getAdapterContract(owner: SignerWithAddress, factoryContractAddress: string, routerContractAddress: string) {
  const tokenFactory = new UniswapAdapter__factory(owner);
  const tokenContract = await tokenFactory.deploy(factoryContractAddress, routerContractAddress);
  await tokenContract.deployed();

  return tokenContract;
}

async function getRouterContract(owner: SignerWithAddress, factoryContractAddress: string, wethAddress: string) {
  const tokenFactory = new UniswapV2Router01__factory(owner);
  const tokenContract = await tokenFactory.deploy(factoryContractAddress, wethAddress);
  await tokenContract.deployed();

  return tokenContract;
}

async function getTokenContract(owner: SignerWithAddress) {
  const tokenFactory = new Token__factory(owner);
  const tokenContract = await tokenFactory.deploy("Name", "NM");
  await tokenContract.deployed();

  return tokenContract;
}