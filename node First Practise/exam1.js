const http = require('http'); //import Module
const fs = require('fs'); //Import Module
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-Type","Text/Html")
    res.write("<html>");
    res.write("<head><tittle>Second Page</tittle></head>");
    res.write("<body><h1>Responce For Second Page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/foam") {
    res.setHeader("content-Type","Text/Html")
    res.write("<html>");
    res.write("<head><tittle>Foam Page</tittle></head>");
    res.write('<body><form action="/file" method="POST" name="msg"><input type="text" name="msg"><button type="submit">submit</button></body>');
    res.write("</html>");
    return res.end();
  }
  if(url === "/file" && method === "POST"){
    const body = [];
    req.on("data",(chunk) =>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on("end", () =>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFileSync("exam1.txt", message);   
        res.statusCode = 302;
        res.setHeader("location", "/foam")
        return res.end();    
    });
  
  }
  res.setHeader("content-Type","Text/Html")
  res.write("<html>")
  res.write("<head><tittle>First Page</tittle></head>");
  res.write("<body><h1>Responce For First Page</h1></body>");
  res.write("</html>");
 res.end();
});

server.listen(3000);
