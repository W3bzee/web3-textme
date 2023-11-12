require('dotenv').config(); 
const axios = require('axios');

// Replace 'YOUR_API_KEY' with the API key you obtained from Etherscan
const apiKey = process.env.ETHERSCAN_API_BALANCE;

// Etherscan API base URL
const apiUrl = 'https://api.etherscan.io/api';

// Example: Get Ether balance for a specific address
const address = process.env.WALLET_ADDRESS;

const getEtherBalance = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        module: 'account',
        action: 'balance',
        address: address,
        apikey: apiKey,
      },
    });

    // Check if the response is successful
    if (response.data.status === '1') {
      const balance = response.data.result / 1000000000000000000;
      console.log(`Balance for ${address}: ${balance} Eth`);
    } else {
      console.error(`Error: ${response.data.message}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

getEtherBalance()

