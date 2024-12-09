// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

interface IIncentivesController {
    function handleAction(address user, uint256 totalSupply, uint256 userBalance) external;
}