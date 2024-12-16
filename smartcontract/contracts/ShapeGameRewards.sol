// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ShapeGameRewards is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    mapping(address => uint256[]) private _playerRewards;
    
    constructor() ERC721("ShapeGame Rewards", "SGR") Ownable(msg.sender) {}

    function mintReward(address player, string memory tokenURI) external onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        
        _mint(player, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _playerRewards[player].push(newTokenId);
        
        return newTokenId;
    }

    function getPlayerRewards(address player) external view returns (uint256[] memory) {
        return _playerRewards[player];
    }
} 