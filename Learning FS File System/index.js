const fs = require('fs');

fs.readFile('./user.json',{encoding: 'utf-8'}, (err, data) => {
    
    if(err){
        console.log('An error occured during the file reading!')
    }else{
        let content = JSON.parse(data);
        
        content.name = "Bruno Rodrigues Garcia";
        content.age = 22;

        fs.writeFile("./user.json", JSON.stringify(content), (err) => {
            if(err){
                console.log('Error occured' + err);
            };
        });
    }
});