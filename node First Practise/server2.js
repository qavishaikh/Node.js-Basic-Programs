const http = require('http'); //import http module

const server = http.createServer((req,res) =>{
    console.log("Url:", req.url, "Method:", req.method, "Header: ", req.headers);
});

server.listen(3000);