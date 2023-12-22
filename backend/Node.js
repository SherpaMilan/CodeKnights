import { DataBlock } from './DataBlock';
import { Blockchain } from './Blockchain';

export class Node{
    constructor(){
        this.blockchain = new Blockchain();
    }

    readData(data){
        const block = new DataBlock(data);
        this.blockchain.addBlock(block);
    }

    validate(){
        for (let i = 1; i < this.blockchain.length - 1; i++){
            const prevBlock = this.blockchain[i-1];
            const currBlock = this.blockchain[i];

            if (currBlock.prevHash !== prevBlock.hash){
                return false;
            }

            if (currBlock.hash !== currBlock.calculateHash()){
                return false;
            }
            return true;
        }
    }

    
}