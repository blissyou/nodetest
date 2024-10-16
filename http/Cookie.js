const http = require('http');

const server = http.createServer(function(request,response){
    response.writeHead(200,{
        'Content-Type': 'text/html',
        'Set-Cookie':[
            'breakfast = toast',
            'dinner = chiken'
        ]
    });
    response.end('<h1>Hello World!</h1>');
}).listen(52273,()=>{
    console.log('Server Running at http://127.0.0.1:52273')
})