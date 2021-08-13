async function main() {
  const [owner, rando] = await ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();
  console.log(`Contract deployed to: ${waveContract.address}`);
  console.log(`Contract deployed by: ${owner.address}`);

  let waveCount = await waveContract.getTotalWaves();
  console.log(`Starting with ${waveCount} waves`);

  let waveTxn = await waveContract.wave();
  await waveTxn.wait();

  randoSession = waveContract.connect(rando);
  waveTxn = await randoSession.wave();
  await waveTxn.wait();

  let randoWaves = await randoSession.getWaverFreq();
  waveCount = await waveContract.getTotalWaves();

  console.log(`We've been waved at ${waveCount}x!!`);
  console.log(`Rando waved at us ${randoWaves}x!!`);
}

main();
