const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');

const reader = new Reader();
const writer = new Writer();

const Main = async () => {
    let data = await reader.Read("./users.csv");
    let processedData = Processor.Process(data);

    let users = new Table(processedData);
    
    let html = await HtmlParser.Parse(users);

    writer.Write(`${Date.now()}.html`, html);
};

Main();