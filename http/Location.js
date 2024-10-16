const fs= require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(302, {
        'location' : 'http://www.google.com'
    })
    res.end();

}).listen(52273,()=>{
    console.log('Server Running at http://127.0.0.1:52273')
});