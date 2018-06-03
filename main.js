// Main


// Missing:
/*  - PoW
    - P2P Networking
    - Funds check (double Spending)
*/
// Simple Blockchain in Node.js
//
const Block = require('./Models/Block');
const Blockchain = require('./Models/Blockchain')
// Create new Chain
let savjeeCoin = new Blockchain();

// Add value
console.log('Mining Block 1...');
savjeeCoin.addBlock(new Block(1, "30/05/2018", {BTC: 1.0}));

console.log('Mining Block 2...');
savjeeCoin.addBlock(new Block(2, "31/05/2018", {BTC: 0.2}));

console.log('Mining Block 3...');
savjeeCoin.addBlock(new Block(3, "01/06/2018", {BTC: 0.7}));

// Display Blocks as json file
//console.log(JSON.stringify(savjeeCoin, null, 4));

// Check if Blockchain is valid
console.log("Is the Blockchain valid? " + savjeeCoin.isChainValid());