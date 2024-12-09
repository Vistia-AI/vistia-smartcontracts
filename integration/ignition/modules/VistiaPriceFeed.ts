// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const vistiaPriceFeedModule = buildModule("vistiaPriceFeedModule", (m) => {
  const vistiaPriceFeed = m.contract("vistiaPriceFeed", [
    BigInt(18),
    "XRP/USD",
  ]);

  return { vistiaPriceFeed };
});

export default vistiaPriceFeedModule;
