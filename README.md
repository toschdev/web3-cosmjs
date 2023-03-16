# Web3CosmJS

Web3CosmJS is a wrapper library that provides a Web3.js-like API for interacting with Cosmos-based blockchains using the CosmJS library. This enables developers familiar with Web3.js to easily work with Cosmos networks.

![Web3CosmJS Mascot](./web3cosmjs.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

- Mimics Web3.js API for a seamless transition from Ethereum development to Cosmos networks
- Built on top of the CosmJS library
- Supports common Web3.js functions for querying and sending transactions

## Installation

`npm install --save web3-cosmjs`

## Usage

```javascript
const Web3CosmJS = require("web3-cosmjs");
const rpcUrl = "http://localhost:26657"; // Replace with the actual RPC URL of your Cosmos node
const web3CosmJS = new Web3CosmJS(rpcUrl);
```

## Query Account Balance

To query the balance of a Cosmos address, use the getBalance method:

```
const address = "cosmos1..."; // Replace with a valid Cosmos address
web3CosmJS.getBalance(address).then(console.log).catch(console.error);
```

## Query Transaction Count (Nonce)

To query the transaction count (nonce) for a Cosmos address, use the `getTransactionCount` method:

```
const address = "cosmos1..."; // Replace with a valid Cosmos address
web3CosmJS.getTransactionCount(address).then(console.log).catch(console.error);
```

## Send Transaction

To send a transaction, use the `sendTransaction` method:

```
const senderPrivateKey = "..."; // Replace with a valid private key
const recipientAddress = "cosmos1..."; // Replace with a valid Cosmos address
const amount = 1000; // Replace with the desired amount to send (in base units)

web3CosmJS
  .sendTransaction(senderPrivateKey, recipientAddress, amount)
  .then(console.log)
  .catch(console.error);
```

## Broadcast Message

```
const senderPrivateKey = "..."; // Replace with a valid private key
const message = {
  type: "...",
  value: { ... },
}; // Replace with a valid Cosmos message object

web3CosmJS
  .broadcastMessage(senderPrivateKey, message)
  .then(console.log)
  .catch(console.error);
```

## Calculate Transaction Fees

```
const message = {
  type: "...",
  value: { ... },
}; // Replace with a valid Cosmos message object
const gasLimit = 200000; // Replace with an appropriate gas limit

web3CosmJS.calculateFees(message, gasLimit).then(console.log).catch(console.error);
```

## Contributing

Contributions are welcome! Please read the contributing guide for more information on how to contribute to this project.

## License

Pending