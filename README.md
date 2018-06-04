# Node.js - Simple Blockchain example in Javascript

This is a simple example of how Blockchain is working.
It was implementen with Javascript in Node.js


```javascript
// Create new Chain
let ownCoin = new Blockchain();
```

```javascript
// Add value to the chain
console.log('Mining Block 1...');
ownCoin.addBlock(new Block(1, "30/05/2018", {OC: 1.0}));
```
