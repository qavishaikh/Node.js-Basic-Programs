const http = require('http'); //import http module

const server = http.createServer((req,res) =>{
    console.log("Qavi Shaikh");
});

server.listen(3000);