// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const priceOracleGetterModule = buildModule("PriceOracleGetter", (m) => {
  const PriceOracleGetter = m.contract("PriceOracleGetter", []);

  return { PriceOracleGetter };
});

export default priceOracleGetterModule;
