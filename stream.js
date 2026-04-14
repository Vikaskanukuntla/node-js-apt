const fs = require('fs');

const rs = fs.createReadStream('./files/lorem.txt' , {encoding : 'utf8'});

const ws = fs.createWriteStream('./files/new-loremmmmmm.txt');
rs.pipe(ws);




ws.on('finish' , ()=>{
    console.log("FInished");
    
    
    
    fs.unlink('./files/new-loremmmmmm.txt' , (err) => {
    if (err){
        console.log("error");
    }
});

});

