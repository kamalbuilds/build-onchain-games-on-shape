// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./ERC721Token.sol";

contract ERC721TokenFactory {
    event TokenCreated(address tokenAddress);

    function createToken(string memory name ,  string memory symbol) external returns (address) {
        TNT721Token token = new TNT721Token(name, symbol);
        token.transferOwnership(msg.sender); // Transfer ownership to the caller
        emit TokenCreated(address(token));
        return address(token);
    }

}
