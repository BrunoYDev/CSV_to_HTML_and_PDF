let Reader = require('./Reader');

let reader = new Reader();



const Main = async () => {
    let data = await reader.Read("./users.csv");
};

Main();