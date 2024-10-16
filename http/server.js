const http = require('http');
const server = http.createServer();


server.on('request', ()=>{
    console.log('request on ');
});

server.on('connection', ()=>{
    console.log('connection on');
});
server.on('close', ()=>{
    console.log('close on');
});

// server.listen(52273,()=>{
//     console.log('http server 52273 port on ..(http://127.0.0.1:52273)');
// });

require('http').createServer(function(req, res){
    res.writeHead(200,{'Content-type': 'text/html'});
    res.end('<h1>hello world</h1>');
    
}).listen(52273,function(){
    console.log('Server Running at http://127.0.0.1:52273')
})