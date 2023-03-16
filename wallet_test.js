const Wallet = require("./src/wallet");

(async () => {
  const wallet = new Wallet();

  // Generate a new wallet
  await wallet.generate();
  console.log("Mnemonic:", wallet.getMnemonic());
  console.log("Address:", await wallet.getAccount());

  // Load a wallet from a given mnemonic
  const mnemonic = "your mnemonic here";
  await wallet.loadFromMnemonic(mnemonic);
  console.log("Loaded Address:", await wallet.getAccount());
})();