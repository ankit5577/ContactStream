// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

contract Contacts {
    address public _admin;

    constructor() {
        _admin = msg.sender;
    }

    struct Contact {
        string name;
        string email;
        uint256 phone;
    }

    Contact[] public contacts;

    event ContactCreated(string name, string email, uint256 phone);
    event Received(address sender, uint256 amount);

    function createContact(
        string memory _name,
        string memory _email,
        uint256 _phone
    ) public {
        contacts.push(Contact(_name, _email, _phone));
        emit ContactCreated(_name, _email, _phone);
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }

    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }
}
