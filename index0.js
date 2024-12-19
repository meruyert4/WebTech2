const fs = require('fs')

fs.writeFile('message.txt', 'Hello Meruyert from Node!', (err) =>{
    if (err) throw err;
    console.log("The file had been saved");
});

fs.readFile('message.txt', 'utf8', (err, data) =>{
    if (err) throw err;
    console.log("The file read sucsessfully");
    console.log(data)
});