import contractABI from '../assets/files/contract-abi.json';
import {ethers} from 'ethers';
// import {getData} from "~/plugins/helpers";

// Load your deployed contract url
// const baseURL = process.env.NETWORK_BASE_URL
// const contractAddress = process.env.CONTRACT_ADDRESS

// Initialize Ethers.js provider
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Create an instance of your contract
const contract = new ethers.Contract("0x76B128c3C232c785cB8c20071a4840a148C821Cf", contractABI, provider);

// Interact with your contract
export async function createCampaign(title) {
  try {
    const signer = getSigner()
    const result = await contract.connect(signer).createCampaign(title);
    console.log(result)
  } catch (error) {
    const errorLog = {...error}
    console.log('Data:', errorLog);
  }
}


export async function donateToCampaign(title) {
  try {
    const signer = getSigner()
    const result = await contract.connect(signer).createCampaign(title);
    console.log(result)
  } catch (error) {
    const errorLog = {...error}
    console.log('Data:', errorLog);
  }
}

export function getSigner() {
  return provider.getSigner();
}

export async function getWalletBalance() {
  return await getSigner().getBalance()
}


