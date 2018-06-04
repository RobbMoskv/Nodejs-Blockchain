// Main
// Simple Blockchain in Node.js

// Constante
const Block = require('./Models/Block');
const Blockchain = require('./Models/Blockchain')

// Create new Chain
let ownCoin = new Blockchain();

// Add value
console.log('Mining Block 1...');
ownCoin.addBlock(new Block(1, "30/05/2018", {OC: 1.0}));

console.log('Mining Block 2...');
ownCoin.addBlock(new Block(2, "31/05/2018", {OC: 0.2}));

console.log('Mining Block 3...');
ownCoin.addBlock(new Block(3, "01/06/2018", {OC: 0.7}));

// Display Blocks as json file
//console.log(JSON.stringify(savjeeCoin, null, 4));

// Check if Blockchain is valid
console.log("Is the Blockchain valid? " + ownCoin.isChainValid());