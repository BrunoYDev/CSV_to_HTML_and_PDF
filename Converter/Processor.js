class Processor{

    static Process(data){
        let separator = data.split("\r\n");
        let rows = [];

        separator.forEach(row => {
            let arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    };
};

module.exports = Processor;