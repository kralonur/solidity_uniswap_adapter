//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@uniswap/v2-core/contracts/interfaces/IUniswapV2Factory.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title An adapter contract for Uniswap
 * @author Me
 */
contract UniswapAdapter {
    /// Uniswap factory
    IUniswapV2Factory private factory;
    /// Uniswap router
    IUniswapV2Router02 private router;
    /// Address of the router
    address private addressRouter;

    /// A mapping for storing pair list
    mapping(address => mapping(address => address)) private pairList;

    constructor(address addressFactory, address _addressRouter) {
        factory = IUniswapV2Factory(addressFactory);
        router = IUniswapV2Router02(_addressRouter);
        addressRouter = _addressRouter;
    }

    /**
     * @dev Creates pair between tokenA and tokenB
     * @param tokenA The address of erc20 token
     * @param tokenB The address of erc20 token
     */
    function createPair(address tokenA, address tokenB) external {
        address result = factory.createPair(tokenA, tokenB);

        pairList[tokenA][tokenB] = result;
        pairList[tokenB][tokenA] = result;
    }

    /**
     * @dev Returns pair of tokens
     * @param tokenA The address of erc20 token
     * @param tokenB The address of erc20 token
     */
    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair)
    {
        return pairList[tokenA][tokenB];
    }

    /**
     * @dev Adds liquidity to the erc20 address pair
     * @param tokenA The address of erc20 token
     * @param tokenB The address of erc20 token
     * @param amountA The amount of token to add liquidity
     * @param amountB The amount of token to add liquidity
     * @param to The address to send liquidity to
     */
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountA,
        uint256 amountB,
        address to
    ) external {
        // Transfer tokens from function caller (function caller should approve first)
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountA);
        IERC20(tokenB).transferFrom(msg.sender, address(this), amountB);

        IERC20(tokenA).approve(addressRouter, amountA);
        IERC20(tokenB).approve(addressRouter, amountB);

        router.addLiquidity(
            tokenA,
            tokenB,
            amountA,
            amountB,
            0,
            0,
            to,
            block.timestamp + 1000
        );
    }

    /**
     * @dev Swaps the erc20 tokens
     * @param tokenA The address of erc20 token
     * @param tokenB The address of erc20 token
     * @param amountIn The amount of token that function sender gonna send
     * @param amountOutMin The minimum amount of token that function sender willing to get
     */
    function swap(
        address tokenA,
        address tokenB,
        uint256 amountIn,
        uint256 amountOutMin
    ) external {
        address[] memory newPath = new address[](2);
        newPath[0] = tokenA;
        newPath[1] = tokenB;

        // Transfer tokens from function caller (function caller should approve first)
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountIn);

        IERC20(tokenA).approve(addressRouter, amountIn);

        router.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            newPath,
            msg.sender,
            block.timestamp + 1000
        );
    }
}
