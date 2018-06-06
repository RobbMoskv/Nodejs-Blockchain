// Constants
const SHA256 = require('crypto-js/sha256');
const MD5 = require('crypto-js/md5');

// Class
class Key {

    // Constructor
    constructor() {
        this.privateKey = this.generatePrivateKey();
        this.publicKey = this.generatePublicKey(this.privateKey);
    }

    // Method: Creates a private Key
    generatePrivateKey() {
        // var randomString = "llasdfJNA3i37BHKADosfjkbkASDFKJB3SDFNAlasdfkbbsdf"
        var randomString = Math.random;
        return SHA256(randomString).toString();
    }

    // Method:
    generatePublicKey(privateKey){
        return MD5(privateKey).toString();
    }
};

module.exports = Key;