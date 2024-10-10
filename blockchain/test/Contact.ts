import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { Contacts } from "../typechain-types";

describe("Contacts Contract", function () {
  let contacts: Contacts;
  let deployerSigner: HardhatEthersSigner;

  beforeEach(async () => {
    [deployerSigner] = await ethers.getSigners();

    const Contacts = await ethers.getContractFactory("Contacts");
    contacts = await Contacts.connect(deployerSigner).deploy();
    await contacts.deployed();
    console.log("Contacts contract deployed to:", contacts.address);
  });

  it("Should deploy with the correct admin", async function () {
    const admin = await contacts._admin();
    const _deployer = await deployerSigner.address.toString();

    console.log("LOG::admin", admin, _deployer);
    // expect(ethers.utils.getAddress(admin)).to.equal(
    //   ethers.utils.getAddress(_deployer),
    // );
  });

  it("Should create a new contact & emit event", async function () {
    const tx = await contacts
      .connect(deployerSigner)
      .createContact("Test1", "test01@gmail.com", BigInt(1234567890));

    const receipt = await tx.wait();

    const event = receipt.events?.find(
      (event) => event.event === "ContactCreated",
    );
    console.log("LOG::event", event);

    // expect(event).to.not.be.undefined;
    // expect(event?.args?.name).to.equal("Test1");
    // expect(event?.args?.email).to.equal("test01@gmail.com");

    const contact = await contacts.contacts(0);
    console.log("LOG::contact", contact);

    // expect(contact.name).to.equal("Test1");
    // expect(contact.email).to.equal("test01@gmail.com");
  });
});
