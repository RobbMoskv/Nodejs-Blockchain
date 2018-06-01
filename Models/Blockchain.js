// Constants
const Block = require('./Block');

// Class Blockchain
class Blockchain{

    // Constructor: Add Genesis Block
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    // Method: Creates the Genesis Block of a Chain
    createGenesisBlock(){
        return new Block(0, "01/01/2018", "Genesis Block", null);
    }

    //Method: Return latest Block
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    // Method: Add a new Block to the chain
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    // Method: Check if chain is valid
};

module.exports = Blockchain;