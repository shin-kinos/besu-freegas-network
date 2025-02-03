
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SampleContract {
    // Define total number as sample storage
    int256 totalNumber;

    // Constructor
    constructor() {
        totalNumber = 0;
    }

    // Function to say hello
    function greeting() public pure returns ( string memory ) {
        return "Hello, from Besu private net!";
    }

    // Function to add number
    function addNumber( int256 number ) public {
        totalNumber = totalNumber + number;
    }

    // Function to get total number
    function getTotalNumber() public view returns ( int256 ) {
        return totalNumber;
    }
}
