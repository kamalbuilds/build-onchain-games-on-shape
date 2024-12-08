// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./ShapeGamePlayerStatus.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./ShapeGame.sol";

contract ShapeGameFactory {
    address[] private gameAddresses;

    event GameCreated(address indexed gameAddress, string name, uint price);

    function createGame(string memory _name, uint _price, string memory _thumbnail, string[] memory _tasks) public returns (address) {
        ShapeGame game = new ShapeGame(_name, _price, _thumbnail, _tasks);
        gameAddresses.push(address(game));
        game.transferOwnership(msg.sender);
        emit GameCreated(address(game), _name, _price);
        return address(game);
    }

    function getGameAddresses() public view returns (address[] memory) {
        return gameAddresses;
    }

    function getTotalGames() public view returns (uint) {
        return gameAddresses.length;
    }

    function getGameDetails(uint index) public view returns (address, string memory, uint, string memory) {
        require(index < gameAddresses.length, "Index out of bounds");
        ShapeGame game = ShapeGame(gameAddresses[index]);
        return (address(game), game.name(), game.price(), game.thumbnail());
    }
}