//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@uniswap/v2-core/contracts/UniswapV2Factory.sol";
import "@uniswap/v2-periphery/contracts/UniswapV2Router02.sol";

contract UniswapAdapter {
    UniswapV2Factory private factory;
    UniswapV2Router02 private router;

    mapping(address => mapping(address => address)) private pairList;

    constructor(address addressFactory, address addressRouter) public {
        factory = UniswapV2Factory(addressFactory);
        router = UniswapV2Router02(addressRouter);
    }

    function createPair(address tokenA, address tokenB) external {
        address result = factory.createPair(tokenA, tokenB);

        pairList[tokenA][tokenB] = result;
        pairList[tokenB][tokenA] = result;
    }

    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair)
    {
        return pairList[tokenA][tokenB];
    }

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountA,
        uint256 amountB,
        address to
    ) external {
        router.addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin - 100,
            amountBMin - 100,
            to,
            block.timestamp + 1000
        );
    }
}
