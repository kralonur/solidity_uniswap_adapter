/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Callee",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Callee__factory>;
    getContractFactory(
      name: "IUniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2ERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "UniswapV2ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2ERC20__factory>;
    getContractFactory(
      name: "UniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Factory__factory>;
    getContractFactory(
      name: "UniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapV2Pair__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;
    getContractFactory(
      name: "UniswapAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapAdapter__factory>;
    getContractFactory(
      name: "UniswapAdapter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UniswapAdapter__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Callee",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Callee>;
    getContractAt(
      name: "IUniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2ERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "UniswapV2ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2ERC20>;
    getContractAt(
      name: "UniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Factory>;
    getContractAt(
      name: "UniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapV2Pair>;
    getContractAt(
      name: "Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;
    getContractAt(
      name: "UniswapAdapter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapAdapter>;
    getContractAt(
      name: "UniswapAdapter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UniswapAdapter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}