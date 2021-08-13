// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 waveCount;

    struct WaveTxn {
        address sender;
        uint256 timestamp;
    }

    mapping(address => uint256) waverFreqs;
    WaveTxn[] waves;

    constructor() {
        console.log("My fancy contract");
    }

    function wave() public {
        waveCount++;
        console.log("%s waved", msg.sender);
        waverFreqs[msg.sender]++;
        waves.push(WaveTxn(msg.sender, block.timestamp));
    }

    function getTotalWaves() public view returns (uint256) {
        return waveCount;
    }

    function getWaverFreq() public view returns (uint256) {
        return waverFreqs[msg.sender];
    }

    // TODO: Get list of waves for the dashboard. Or maybe not
}
