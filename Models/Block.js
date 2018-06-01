// Constants
const SHA256 = require('crypto-js/sha256');

// Class
class Block {

    // Constructor
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    // Method: Returns a hash value for a block
    calculateHash(){
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
};

module.exports = Block;