const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Attendance = await hre.ethers.getContractFactory("Attendance");

  // Deploy the contract
  const attendance = await Attendance.deploy();

  // Wait for deployment
  await attendance.waitForDeployment();

  console.log("Attendance deployed to:", await attendance.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});