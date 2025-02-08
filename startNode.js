const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('CSI203: DIGITAL ARCHITECTURE AND OPRATING SYSTEMS\nThis is a sample learning tool for the CSI 203 course. \nWorkshop #3: startNode.js');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})