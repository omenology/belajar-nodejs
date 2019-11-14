const http = require('http');
let i =1;
// Create server obect
http.createServer((req, res)=>{
    // Write response
    res.write('hello wordl');
    res.end();
    console.log(i)
    i++;
}).listen(5000,()=>console.log('Server running...'));