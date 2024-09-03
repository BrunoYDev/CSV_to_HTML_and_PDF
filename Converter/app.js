let Reader = require('./Reader');
let Processor = require('./Processor');
let Table = require('./Table');

let reader = new Reader();

const Main = async () => {
    let data = await reader.Read("./users.csv");
    let processedData = Processor.Process(data);

    let users = new Table(processedData);
    console.log(users.RowCount);
    console.log(users.ColumnCount);
};

Main();