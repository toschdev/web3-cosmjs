const Web3CosmJS = require("../web3-cosmjs");
const sinon = require("sinon");

describe("Web3CosmJS", () => {
  let web3CosmJS;
  const rpcUrl = "http://localhost:26657";

  beforeEach(() => {
    web3CosmJS = new Web3CosmJS(rpcUrl);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("getBalance", () => {
    it("should return the balance of an address", async () => {
      const balanceStub = sinon.stub(web3CosmJS, "getBalance").resolves("1000");
      const address = "cosmos1...";
      const denom = "uatom";
      const balance = await web3CosmJS.getBalance(address, denom);

      expect(balance).toBe("1000", "uatom");
      expect(balanceStub.calledWith(address, denom)).toBe(true);
    });
  });

  describe("getTransactionCount", () => {
    it("should return the transaction count of an address", async () => {
      const txCountStub = sinon.stub(web3CosmJS, "getTransactionCount").resolves(3);
      const address = "cosmos1...";
      const txCount = await web3CosmJS.getTransactionCount(address);

      expect(txCount).toBe(3);
      expect(txCountStub.calledWith(address)).toBe(true);
    });
  });

  describe("sendTransaction", () => {
    it("should send a transaction and return the result", async () => {
      const expectedResult = { transactionHash: "hash..." };
      const sendTxStub = sinon.stub(web3CosmJS, "sendTransaction").resolves(expectedResult);

      const txObject = {
        from: "cosmos1...",
        privateKey: "private_key",
        to: "cosmos1...",
        amount: "1000",
        memo: "test",
        gasLimit: 200000,
        gasPrice: 1,
        fee: 5000,
      };

      const result = await web3CosmJS.sendTransaction(txObject);

      expect(result).toEqual(expectedResult);
      expect(sendTxStub.calledWith(txObject)).toBe(true);
    });
  });

  describe("signTransaction", () => {
    it("should sign a transaction and return the signed transaction", async () => {
      const expectedResult = { signedTx: "signed_tx..." };
      const signTxStub = sinon.stub(web3CosmJS, "signTransaction").resolves(expectedResult);

      const txObject = {
        from: "cosmos1...",
        privateKey: "private_key",
        to: "cosmos1...",
        amount: "1000",
        memo: "test",
        gasLimit: 200000,
        gasPrice: 1,
        fee: 5000,
      };

      const result = await web3CosmJS.signTransaction(txObject);

      expect(result).toEqual(expectedResult);
      expect(signTxStub.calledWith(txObject)).toBe(true);
    });
  });

  describe("sendSignedTransaction", () => {
    it("should send a signed transaction and return the result", async () => {
      const expectedResult = { transactionHash: "hash..." };
      const sendSignedTxStub = sinon.stub(web3CosmJS, "sendSignedTransaction").resolves(expectedResult);

      const signedTx = { signedTx: "signed_tx..." };
      const result = await web3CosmJS.sendSignedTransaction(signedTx);

      expect(result).toEqual(expectedResult);
      expect(sendSignedTxStub.calledWith(signedTx)).toBe(true);
    });
  });

  describe("estimateGas", () => {
    it("should return a default gas value", async () => {
      const gasEstimate = await web3CosmJS.estimateGas({});

      expect(gasEstimate).toBe(200000);
    });

    // Add more test cases for different scenarios if you implement custom gas estimation logic
  });
});