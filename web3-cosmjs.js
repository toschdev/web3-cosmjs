const { DirectSecp256k1HdWallet } = require("@cosmjs/crypto");
const { SigningStargateClient } = require("@cosmjs/stargate");

class Web3CosmJS {
  constructor(rpcUrl) {
    this.rpcUrl = rpcUrl;
  }

  // Other methods will be added here
  async getBalance(address, denom) {
    // Implement getBalance logic
    const client = await SigningStargateClient.connectWithSigner(this.rpcUrl, []);
    const account = await client.getBalance(address, denom);
    return account.amount;
  }

  async getTransactionCount(address) {
    // Implement getTransactionCount logic
  }

  async sendTransaction(txObject) {
    // Implement sendTransaction logic
  }

  async signTransaction(txObject) {
    // Implement signTransaction logic
  }
}

module.exports = Web3CosmJS;