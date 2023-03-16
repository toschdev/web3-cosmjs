const Web3CosmJS = require('./src/web3cosmjs');

// (async () => {
//   const web3CosmJS = new Web3CosmJS("https://rpc-cosmos.sg-1.online:443");

//   const address = 'cosmos1...';
//   const denom = 'uatom'

//   try {
//     const balance = await web3CosmJS.getBalance(address, denom);
//     console.log(`Balance of ${address}:`, balance, denom);
//   } catch (error) {
//     console.error('Error getting balance:', error);
//   }
// })();

// (async () => {
//   const senderPrivateKey = "..."; // Replace with a valid private key
//   const recipientAddress = "cosmos1..."; // Replace with a valid Cosmos address
//   const amount = 1000; // Replace with the desired amount to send (in base units)

//   Web3CosmJS
//     .sendTransaction(senderPrivateKey, recipientAddress, amount)
//     .then(console.log)
//     .catch(console.error);
// })();
