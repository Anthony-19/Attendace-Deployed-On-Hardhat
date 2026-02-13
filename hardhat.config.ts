import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const { CORE_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
  coreTestnet: {
      url: `${CORE_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
      // gas: 60000000000
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};

export default config;
