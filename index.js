import { Blockchain } from "./backend/Blockchain.js";
import { DataBlock } from "./backend/DataBlock.js";

let bitcoin = new Blockchain();
for (let i = 1; i < 5;  i++){
    bitcoin.setDifficulty(i);
    console.log("DIFFFICULTY LEVEL: " + i);
    console.log("=======\n");
    console.log("Mining block 1...")
    bitcoin.addBlock( new DataBlock(4));

    console.log("=======\n");
    console.log("Mining block 2...")
    bitcoin.addBlock( new DataBlock(8))
}