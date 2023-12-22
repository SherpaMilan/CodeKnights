import { CryptoJS } from "../utilities.js";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export class DataBlock{
    constructor(data, prevHash = ''){
        this.nonce = 0;
        this.data = data;
        this.timestamp = new Date().toISOString();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
    }

    getEncryptedData(){
        return CryptoJS.AES.encrypt(
            (this.data + this.timestamp + this.prevHash + this.nonce), 
            secretKey
        ).toString();
    }

    mine(difficulty){
        const target = Array(difficulty + 1).join("0");
        const startTime = Date.now();

        while (!this.hash.startsWith(target) && this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        const endTime = Date.now();
        const totalElapsed = (endTime - startTime) / 1000;

        console.log("BLOCK MINED: " + this.hash);
        console.log(`Total Mining Time: ${totalElapsed.toFixed(2)} seconds`);

    }

    calculateHash(){
        return CryptoJS.SHA3(this.getEncryptedData()).toString();
    }
}
