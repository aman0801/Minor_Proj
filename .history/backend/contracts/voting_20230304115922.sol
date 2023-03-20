//  SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Voting{
    string public candidate1 = "BJP";
    string public candidate2 = "R";
    uint noOfParticipants = 0;
    mapping(address => bool) public votes;

    uint256 vote1;
    uint256 vote2;

    event VoteCast(address indexed voter, string candidate);

    function castVote(string memory candidate) public{
        require(bytes(candidate).length > 0, "Candidate can't be empty");
        require(votes[msg.sender] == false, "You have already voted");

        emit VoteCast(msg.sender, candidate);
        votes[msg.sender] = true;
        noOfParticipants++;

        if(keccak256(bytes(candidate)) == keccak256(bytes(candidate1))){
            vote1++;
        }else if(keccak256(bytes(candidate)) == keccak256(bytes(candidate2))){
            vote2++;
        }

    }

    function getWinner() public view returns(string memory){
        
        if(vote1 > vote2){
            return candidate1;
        }else if(vote2 > vote1){
            return candidate2;
        }else
        return "Tie";
    }
}