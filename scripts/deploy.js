async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contracts with account: ${deployer.address}`);
  console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);

  const Token = await ethers.getContractFactory("WavePortal");
  const token = await Token.deploy();
  console.log(`WavePortal address: ${token.address}`);
}

main();
