// Constants
const SHA256 = require('crypto-js/sha256');

// Class
class Block {

    // Constructor
    constructor(transactions, previousHash = ''){
        this.timestamp = Date.now();
        this.transactions = transactions
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    // Method: Returns a hash value for a block
    calculateHash(){
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.transactions) + this.nonce).toString();
    }

    // Method: Mine Block
    mineBlock(difficulty){

        // Loop till difficulty is met (by increasing the nonce)
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log('Block mined: ' + this.hash);
    }
};

module.exports = Block;