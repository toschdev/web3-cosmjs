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

// Replace with your Cosmos node RPC URL
const rpcUrl = "http://localhost:26657";
const web3CosmJS = new Web3CosmJS(rpcUrl);

// Use the Web3CosmJS instance to interact with the Cosmos network

```

## Examples

Here are some basic examples of how to use the Web3CosmJS library:

## Get balance

```
const address = "cosmos1...";
const balance = await web3CosmJS.getBalance(address);
console.log(`Balance of ${address}:`, balance);
```

## Send transaction

```
// Add your implementation for sending transactions
Sign transaction
```

## Sign transaction

```
// Add your implementation for signing transactions
For more examples, please refer to the examples directory.
```

## Contributing

Contributions are welcome! Please read the contributing guide for more information on how to contribute to this project.

## License

Pending