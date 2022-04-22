import { Contract, ContractFactory } from 'ethers';
import { ethers } from 'hardhat';

async function main() {
  const name: string = 'Workshop';
  const constructorArgs: Array<string | number> = ['100000000000000'];

  const contractFactory: ContractFactory = await ethers.getContractFactory(
    name
  );
  const contract: Contract = await contractFactory.deploy(...constructorArgs);
  await contract.deployed();

  console.log(name + ' deployed to:', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
