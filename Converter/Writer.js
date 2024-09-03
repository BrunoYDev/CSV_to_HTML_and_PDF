const fs = require('fs');
const utils = require('util');

class Writer{

    constructor(){
        this.writer = utils.promisify(fs.writeFile); // The promisify transforms the fs.writeFile in an async function, and that makes possible to return data.
    };

    async Write(filename, data){
        try {
            return await this.writer(filename,data);
            return;
        } catch (err) {
            return false;
        }
       
    }

};

module.exports = Writer;