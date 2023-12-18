

class DataBlock{
    constructor(data){
        this.data = data;
        this.timestamp = new Date().toISOString();
        this.hash = this.getHash()
    }

    getHash(){

    }
}