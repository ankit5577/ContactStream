import { deployments, getNamedAccounts } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deployContacts: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  // Deploy Contacts Contract
  await deploy("Contacts", {
    from: deployer,
    log: true,
    args: [],
  });

  log("Contact COntarct is deployed !!!");
};

export default deployContacts;
deployContacts.tags = ["contacts"];
