const { 
    makeCosmoshubPath, 
    DirectSecp256k1HdWallet, 
    Bip39,
    Random, 
} = require('@cosmjs/proto-signing');

  
class Wallet {
    constructor() {
      this.mnemonic = "";
      this.wallet = null;
    }
  
    async generate() {
      this.mnemonic = Bip39.encode(Random.getBytes(16)).toString();
      this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic);
      return this.wallet;
    }
  
    async loadFromMnemonic(mnemonic) {
      this.mnemonic = mnemonic;
      this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic);
      return this.wallet;
    }
  
    async getAccount() {
      if (!this.wallet) {
        throw new Error("Wallet is not initialized");
      }
  
      const [{ address }] = await this.wallet.getAccounts();
      return address;
    }
  
    getMnemonic() {
      return this.mnemonic;
    }
  }
  
  module.exports = Wallet;