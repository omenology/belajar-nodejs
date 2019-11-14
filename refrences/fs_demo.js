const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname,'test'), {}, (err)=>{
//     if(err) throw err;
//     console.log('folder created...');
// })

// Create and write to file
// fs.writeFile(path.join(__dirname,'test', 'hello.txt'), 'Hello world!', (err)=>{
//     if(err) throw err;
//     console.log('File Written to...');
// })

// File appand
// fs.appendFile(path.join(__dirname,'test', 'hello.txt'), 'Hello world! ke 2 dong', (err)=>{
//     if(err) throw err;
//     console.log('File Written to...');
// })

// Read File
// fs.readFile(path.join(__dirname,'test', 'hello.txt'), 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// Rename File
// fs.rename(path.join(__dirname,'test', 'hello.txt'), path.join(__dirname,'test', 'helloworld.txt'), (err)=>{
//     if(err) throw err;
//     console.log('File renamed...');
// })