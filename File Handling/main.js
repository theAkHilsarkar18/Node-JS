const fs = require("fs");

// to create a file in write mode - its override all passed string wheneve we run
// its sync function
// fs.writeFileSync(
//     './File Handling/demo.txt',
//     'Demo.txt is created !'
// );

// its async function
// fs.writeFile('./File Handling/demo.txt','Its created by async',(err)=>{
//     console.log(err);
// });

// to read existing file from storage
// its return data from file
// utf-8 : we provide one type of format of file to decode files content easily, utf-8 for txt file
const result = fs.readFileSync('./File Handling/demo.txt',"utf-8");
console.log(result);


