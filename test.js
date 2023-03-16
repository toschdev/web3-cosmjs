const Web3CosmJS = require('./web3-cosmjs');

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

(async () => {
  const web3CosmJS = new Web3CosmJS('https://rpc-cosmos.sg-1.online:443');

  const address = 'cosmos1...';
  const denom = 'uatom';
  web3CosmJS.getTransactionCount(address, denom).then(console.log).catch(console.error);
})();
