const pdf = require('html-pdf');

class PDFWriter{

    static WritePdf(filename, html){
        pdf.create(html,{}).toFile(filename,(err) => {
            if(err){
                console.log(err);
            };
        });
    };
};

module.exports = PDFWriter;