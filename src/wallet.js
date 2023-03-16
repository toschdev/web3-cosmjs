const Bip39 = require('bip39');
const { DirectSecp256k1HdWallet } = require('@cosmjs/proto-signing');

class Wallet {
  constructor() {
    this.mnemonic = null;
    this.wallet = null;
  }

  async generate() {
    this.mnemonic = Bip39.generateMnemonic();
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(this.mnemonic);
  }

  async loadFromMnemonic(mnemonic) {
    this.mnemonic = mnemonic;
    this.wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
  }

  async getAccount() {
    if (!this.wallet) {
      throw new Error('No wallet available. Call generate() or loadFromMnemonic() first.');
    }
    const [account] = await this.wallet.getAccounts();
    return account;
  }

  getMnemonic() {
    if (!this.mnemonic) {
      throw new Error('No mnemonic available. Call generate() or loadFromMnemonic() first.');
    }
    return this.mnemonic;
  }
}

module.exports = Wallet;