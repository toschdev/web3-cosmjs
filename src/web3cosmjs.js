const { DirectSecp256k1HdWallet } = require('@cosmjs/crypto');
const { QueryClient } = require('@cosmjs/stargate');
const { SigningStargateClient } = require('@cosmjs/stargate');
const { Tendermint34Client } = require('@cosmjs/tendermint-rpc');
const {
  QueryAccountRequest,
  QueryAccountResponse,
} = require('cosmjs-types/cosmos/auth/v1beta1/query');

class Web3CosmJS {
  constructor(rpcUrl) {
    this.rpcUrl = rpcUrl;
  }

  async getBalance(address, denom) {
    const client = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      []
    );
    const account = await client.getBalance(address, denom);
    return account.amount;
  }

  async getTransactionCount(address) {
    const client = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      []
    );
    const response = await client.getAccount(address);
    return response.sequence;
  }

  async sendTransaction(txObject) {
    const { from, privateKey, to, amount, memo, gasLimit, gasPrice, fee } =
      txObject;
    const wallet = await DirectSecp256k1HdWallet.fromKey(privateKey);
    const [account] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      wallet
    );

    const sendMsg = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: account.address,
        toAddress: to,
        amount: [{ denom: 'uatom', amount: String(amount) }],
      },
    };

    const feeAmount = fee || gasLimit * gasPrice;

    const txResult = await client.signAndBroadcast(
      from,
      [sendMsg],
      {
        gas: String(gasLimit),
        amount: [{ denom: 'uatom', amount: String(feeAmount) }],
      },
      memo
    );

    return txResult;
  }

  async signTransaction(txObject) {
    const { from, privateKey, to, amount, memo, gasLimit, gasPrice, fee } =
      txObject;
    const wallet = await DirectSecp256k1HdWallet.fromKey(privateKey);
    const [account] = await wallet.getAccounts();
    const client = await SigningStargateClient.connectWithSigner(
      this.rpcUrl,
      wallet
    );

    const sendMsg = {
      typeUrl: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        fromAddress: account.address,
        toAddress: to,
        amount: [{ denom: 'uatom', amount: String(amount) }],
      },
    };

    const feeAmount = fee || gasLimit * gasPrice;

    const signedTx = await client.sign(
      from,
      [sendMsg],
      {
        gas: String(gasLimit),
        amount: [{ denom: 'uatom', amount: String(feeAmount) }],
      },
      memo
    );

    return signedTx;
  }

  async sendSignedTransaction(signedTx) {
    const client = await SigningStargateClient.connect(this.rpcUrl);
    const txResult = await client.broadcastTx(signedTx);
    return txResult;
  }

  async estimateGas() {
    // There's no direct equivalent for gas estimation in CosmJS
    // You can provide a default gas value or implement your own estimation logic
    return 200000; // Default gas value
  }
}

module.exports = Web3CosmJS;
