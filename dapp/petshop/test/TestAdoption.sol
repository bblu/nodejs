pragma solidity ^0.4.17;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption{
    Adoption adopton = Adoption(DeployedAddresses.Adoption());

    //test adopt Pet
    function testUserCanAdoptPet() public {
        uint returnedId = Adoption.adopt(8);

        uint expected = 8;
        Assert.equal(returnedId, expected, "Adoption of pet Id 8 shoud be recorded");
    }

    // 
    function testGetAdopterAddressByPetId() public {
        address expected = this;
        address adopter = Adoption.adopters(8);
        Assert.equal(adopter, expected, "owner of pet id 8 should be recorded.");
    }
    //
    function testGetAdopterAddressByPetIdInArray() public{
        address expected = this;
        address[16] memory adopters = Adoption.getAdopters();
        Assert.equal(adopters[8], expected, "Owner of pei Id 8 should be recorded.");
    }
}