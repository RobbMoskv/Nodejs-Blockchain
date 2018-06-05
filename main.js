// Main
// Simple Blockchain in Node.js

// Constante
const Block = require('./Models/Block');
const Blockchain = require('./Models/Blockchain');
const Transaction = require('./Models/Transaction');

// Create new Chain
let ownCoin = new Blockchain();
let myAddress = 'FF0xRobbMoskv8shabsv888';

// Add value
ownCoin.addTransactionToPool(new Transaction('FF0x92Hksn7Hbsjhb2vSIaa', 'FF0x09jDbnkai2hULVlskjj', '0.5'));
ownCoin.addTransactionToPool(new Transaction('FF0x92Hksn7Hbsjhb2vSIaa', 'FF0xjNSBY36hsVJFKlKSN28', '1.5'));
// ownCoin.addTransactionToPool(new Transaction('FF0xjNSBY36hsVJFKlKSN28', 'FF0xRobbMoskv8shabsv888', '0.8'));
ownCoin.addTransactionToPool(new Transaction('FF0xjNSBY36hsVJFKlKSN28', 'FF0xjNSBY36hsVJFKlKSN28', '0.03'));

console.log('Starting the miner...');
ownCoin.minePendingTransactions(myAddress);

console.log('Balance of FF0xRobbMoskv8shabsv888:', ownCoin.getBalanceofAddress(myAddress));

console.log('Starting the miner...');
ownCoin.minePendingTransactions(myAddress);

console.log('Balance of FF0xRobbMoskv8shabsv888:', ownCoin.getBalanceofAddress(myAddress));

// Check if Blockchain is valid
// console.log("Is the Blockchain valid? " + ownCoin.isChainValid());