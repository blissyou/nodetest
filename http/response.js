const fs= require('fs');
const http =require('http');

const server = http.createServer(function(req, res){
    fs.readFile('/Users/choewonhyeong/Desktop/my_fucking_project/nodetest/http/다운로드.jpeg',(error,file)=>{
        res.writeHead(200,{'Content-tyoe': 'text/html'});
        res.end(file);
    })
}).listen(52273, ()=>{
    console.log('Server Running at http://127.0.0.1:52273')
})
