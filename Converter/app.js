let Reader = require('./Reader');
let Processor = require('./Processor');

let reader = new Reader();

const Main = async () => {
    let data = await reader.Read("./users.csv");
    let processedData = Processor.Process(data);

    
};

Main();