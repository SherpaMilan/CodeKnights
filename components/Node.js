import { DataBlock } from './DataBlock';
import { Blockchain } from './Blockchain';

export class Node{
    constructor(){
        this.blockchain = new Blockchain();
    }

    readData(data){
        const block = new DataBlock(data);

    }
}