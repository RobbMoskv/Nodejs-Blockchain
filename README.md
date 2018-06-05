# Node.js - A simple Blockchain example in Javascript

This is a simple example of how Blockchain is basically working.
It was implemented with Javascript in Node.js and does of course not reflect a real Blockchain.

Create Instance of the Blockchain class

```javascript
// Create new Chain
let ownCoin = new Blockchain();
```
and add Block objects to it via responsible Methods

```javascript
// Add value to the chain
ownCoin.addTransactionToPool(new Transaction('FF0x92Hksn7Hbsjhb2vSIaa', 'FF0x09jDbnkai2hULVlskjj', '0.5'));

console.log('Starting the miner...');
ownCoin.minePendingTransactions(myAddress);s
```
