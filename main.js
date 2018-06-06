// Main
// Simple Blockchain in Node.js

// Constante
var Block = require('./Models/Block')
const Blockchain = require('./Models/Blockchain');
const Transaction = require('./Models/Transaction');
const Key = require('./Models/Key');

// Create new Chain
let ownCoin = new Blockchain();


var CoinKey = require('coinkey')

var bitcoinKeys = []
for (var i = 0; i < 2; ++i) {
  // bitcoin supported by default
  bitcoinKeys.push(CoinKey.createRandom())
}

for(const btck of bitcoinKeys){
    console.log(btck._publicKey);
}

// // Create Key
// let key = new Key();
// let myPublicKey = key.PublicKey;

// console.log('My PubKey: ' + key.publicKey);
// console.log('My PrivateKey: ' + key.privateKey);

// // Add value
// ownCoin.addTransactionToPool(new Transaction('FF0x92Hksn7Hbsjhb2vSIaa', 'FF0x09jDbnkai2hULVlskjj', '0.5'));
// ownCoin.addTransactionToPool(new Transaction('FF0x92Hksn7Hbsjhb2vSIaa', 'FF0xjNSBY36hsVJFKlKSN28', '1.5'));
// ownCoin.addTransactionToPool(new Transaction('FF0xjNSBY36hsVJFKlKSN28', 'FF0xRobbMoskv8shabsv888', '0.8'));
// ownCoin.addTransactionToPool(new Transaction('FF0xjNSBY36hsVJFKlKSN28', 'FF0xjNSBY36hsVJFKlKSN28', '0.03'));

// console.log('Starting the miner...');
// ownCoin.minePendingTransactions(key.publicKey);

// console.log('Balance:', ownCoin.getBalanceofAddress(key.publicKey));

// console.log('Starting the miner...');
// ownCoin.minePendingTransactions(key.publicKey);

// console.log('Balance:', ownCoin.getBalanceofAddress(key.publicKey));

// // Check if Blockchain is valid
// console.log("Is the Blockchain valid? " + ownCoin.isChainValid());