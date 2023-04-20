const http = require('http');
const serverContent = require('./server conntent');
console.log(serverContent.data);
const server = http.createServer(serverContent.Handler);


server.listen(3000);