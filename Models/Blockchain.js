
// Constants
const Block = require('./Block');
const Transaction = require('./Transaction');

// Class Blockchain
class Blockchain{

    // Constructor: Add Genesis Block
    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
        this.pendingTransactionPool = [];
        this.miningReward = 12.5;
    }

    // Method: Creates the Genesis Block of a Chain
    createGenesisBlock(){
        return new Block("01/01/2018", "Genesis Block", null);
    }

    //Method: Return latest Block
    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    // Method: Add transactions to a block and mine it
    minePendingTransactions(miningRewardAddress){
        let block = new Block(this.pendingTransactionPool);
        block.mineBlock(this.difficulty);

        console.log('Block successfully mined!');
        this.chain.push(block);

        // Add Coinbase Transaction to the pool
        this.pendingTransactionPool = [
            new Transaction(null, miningRewardAddress, this.miningReward)
        ];
    }

    // Method: Add Transaction to the pool
    addTransactionToPool(transaction){
        this.pendingTransactionPool.push(transaction);
    }

    // Method: Get Balance of specific Address
    getBalanceofAddress(address){
        let balance = 0;
        // loop through each block
        for(const block of this.chain){
            // and each transaction of a block
            for(const tx of block.transactions){
                // Decrease amount if money was sent
                if(tx.fromAddress === address){
                    balance -= tx.amount;
                }

                // Increase amount if money was received
                if(tx.toAddress === address){
                    balance += tx.amount;
                }
            }
        }

        return balance;
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