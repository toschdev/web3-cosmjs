const Wallet = require('./src/wallet');

(async () => {
  const wallet = new Wallet();

  // Generate a new wallet
  const new_wallet = await wallet.generate();
  console.log('Generated Mnemonic:', wallet.getMnemonic());

  // Load a wallet from an existing mnemonic
  const existingMnemonic = wallet.getMnemonic();
  await wallet.loadFromMnemonic(existingMnemonic);
  console.log('Loaded Mnemonic:', wallet.getMnemonic());

  // Get account information
  const account = await wallet.getAccount();
  console.log('Account:', account);
})();