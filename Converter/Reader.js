const fs = require("fs");
const utils = require('util');

class Reader{

    constructor(){
        this.reader = utils.promisify(fs.readFile);
    };

    async Read(filepath){
        try {
            return await this.reader(filepath,"utf-8");
        } catch (err) {
            return undefined;
        };
    };

};

module.exports = Reader;