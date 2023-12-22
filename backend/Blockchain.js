import { DataBlock } from "./DataBlock.js";

export class Blockchain{
    constructor(){
        this.chain = [ this.createGenesisBlock() ];
        this.difficulty = 4;
    }

    createGenesisBlock(){
        return new DataBlock("Genesis Block", "0");
    }

    addBlock(newBlock){
        newBlock.prevHash = this.getLatestBlock().hash;
        newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

    getLatestBlock(){
        return this.chain[ this.chain.length - 1];
    }

    setDifficulty(level){
        this.difficulty = level;
    }
}