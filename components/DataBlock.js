const CryptoJS = require("crypto-js");

export class DataBlock{
    constructor(data){
        this.data = data;
        this.timestamp = new Date().toISOString();
        this.hash = this.getHash()
    }

    getHash(){
        return CryptoJS.SHA3((this.data + this.timestamp)).toString();
    }
}
