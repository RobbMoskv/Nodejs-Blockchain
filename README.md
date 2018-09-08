# Node.js - A simple Blockchain example in Javascript

This is a simple example of how Blockchain is basically working.
It was implemented with Javascript in Node.js and does of course not reflect a real Blockchain.


## Code examples

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
ownCoin.minePendingTransactions(myAddress);
```

## Used libraries

* [eckey](http://cryptocoinjs.com/modules/currency/eckey/)
* [CoinKey](https://github.com/cryptocoinjs/coinkey)
* [Generating a Bitcoin Address with JavaScript](http://procbits.com/2013/08/27/generating-a-bitcoin-address-with-javascript)
<<<<<<< HEAD
=======

## Credits

The core of this code was implemented with the help of [SavjeeTutorials](https://github.com/SavjeeTutorials/SavjeeCoin) and his cool Tutorials on [Youtube](https://www.youtube.com/watch?v=zVqczFZr124&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4).
>>>>>>> 2f0fd82e008ed4a25f3410e18f524a5b5abc857a
