// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ShapeGameAchievements is Ownable {
    struct Achievement {
        string name;
        string description;
        uint256 points;
        bool exists;
    }

    mapping(bytes32 => Achievement) public achievements;
    mapping(address => mapping(bytes32 => bool)) public playerAchievements;
    mapping(address => uint256) public playerPoints;

    event AchievementUnlocked(address indexed player, bytes32 indexed achievementId);
    event PointsAwarded(address indexed player, uint256 points);

    constructor() Ownable(msg.sender) {}

    function addAchievement(
        bytes32 achievementId,
        string memory name,
        string memory description,
        uint256 points
    ) external onlyOwner {
        require(!achievements[achievementId].exists, "Achievement already exists");
        
        achievements[achievementId] = Achievement({
            name: name,
            description: description,
            points: points,
            exists: true
        });
    }

    function unlockAchievement(address player, bytes32 achievementId) external onlyOwner {
        require(achievements[achievementId].exists, "Achievement does not exist");
        require(!playerAchievements[player][achievementId], "Achievement already unlocked");

        playerAchievements[player][achievementId] = true;
        playerPoints[player] += achievements[achievementId].points;

        emit AchievementUnlocked(player, achievementId);
        emit PointsAwarded(player, achievements[achievementId].points);
    }

    function getPlayerPoints(address player) external view returns (uint256) {
        return playerPoints[player];
    }

    function hasAchievement(address player, bytes32 achievementId) external view returns (bool) {
        return playerAchievements[player][achievementId];
    }
} 