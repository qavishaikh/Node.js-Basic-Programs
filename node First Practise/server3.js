const http = require('http'); //import http module

const server = http.createServer((req,res) =>{
    res.setHeader("content-Type","Text/Html")
    res.write("<html>");
    res.write("<head><tittle>First Page</tittle></head>");
    res.write("<body><h1>Qavi Shaikh</h1>");
    res.write("<h2>My First Response from server</h2></body>");
    res.write("</html>");
    res.end();

});

server.listen(3000);