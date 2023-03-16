const Web3CosmJS = require('./web3-cosmjs');

(async () => {
  const web3CosmJS = new Web3CosmJS("https://rpc-cosmos.sg-1.online:443");
  
  const address = 'cosmos196ax4vc0lwpxndu9dyhvca7jhxp70rmcfhxsrt';
  const denom = 'uatom'

  try {
    const balance = await web3CosmJS.getBalance(address, denom);
    console.log(`Balance of ${address}:`, balance, denom);
  } catch (error) {
    console.error('Error getting balance:', error);
  }
})();