const Wallet = require('../src/wallet');

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  test('generate() should create a new wallet and set the mnemonic', async () => {
    await wallet.generate();
    expect(wallet.getMnemonic()).toBeTruthy();
  });

  test('loadFromMnemonic() should load a wallet from an existing mnemonic', async () => {
    const existingMnemonic = 'pudding minimum legend bamboo gun seed neither sense extra siege orphan mammal';
    await wallet.loadFromMnemonic(existingMnemonic);
    expect(wallet.getMnemonic()).toBe(existingMnemonic);
  });

  test('getAccount() should return account details', async () => {
    await wallet.generate();
    const account = await wallet.getAccount();
    expect(account).toHaveProperty('address');
    expect(account).toHaveProperty('pubkey');
  });

  test('getMnemonic() should throw an error if no wallet is loaded or generated', () => {
    expect(() => wallet.getMnemonic()).toThrow(
      'No mnemonic available. Call generate() or loadFromMnemonic() first.'
    );
  });
});