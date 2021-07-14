// SPDX-License-Identifier: MIT

pragma solidity ^0.7.3;

contract Parent {
    uint256 public parentState;
    Child immutable child;

    constructor(Child _child) {
        child = _child;
    }

    function run() external {
        parentState = 5566;
        (bool success,  ) = address(child).delegatecall(
            abi.encodeWithSignature("run()")
        );
        require(!success);
    }
}

contract Child {
    uint256 public childState;
    GrandChild immutable grandChild;

    constructor(GrandChild _grandChild) {
        grandChild = _grandChild;
    }

    function run() external returns (uint256) {
        childState = 5566;
        grandChild.run();
        require(false, "fail here");
        return childState;
    }
}

contract GrandChild {
    uint256 public grandChildState;

    constructor() {}

    function run() external {
        grandChildState = 5566;
    }
}
