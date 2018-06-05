
// Constants
const Block = require('./Block');

// Class Blockchain
class Blockchain{

    // Constructor: Add Genesis Block
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
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
        // newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    // Method: Check if chain is valid
    isChainValid(){
        // loop trough each block
        for(let i = 1; i < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check if the Hash of this block is still valid
            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }

            // Check if the 'previousHash' is still correct and the current block points to correct previous one.
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }

        return true;
    }
};

module.exports = Blockchain;