/*import http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
console.log(`Server Started! Please visit http://127.0.0.1:${port}`);*/

function pyramid (a:number):void{
    var b:String = '';
    for(var  i:number = 0; i<a; i++){
        for(var j:number = a-i-1; j >= 0 ; j--){
            b += ' ';
        }
        for(var k:number = 0; k<i+1; k++){
            b += '*';
        }
        console.log(b);
    }
}

pyramid(3);