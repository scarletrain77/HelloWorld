
//var prompt = require('C:\Program Files (x86)\Egret\Egret Wing 3\resources\app\extensions\typescript\server\typescript\lib\lib.d.ts');
function pyramid (a:number):void{
    for(var  i:number = 0; i<a; i++){
        var b:string = '';
        for(var j:number = 0; j < a-i-1 ; j++){
            b += ' ';
        }
        for(var k:number = 0; k<2*i-1; k++){
            b += '*';
        }
        console.log(b + '\n');
    }
}

var numS:string = window.prompt("请输入一个数字","");
var num:number = parseInt(numS);
//var numS;
//prompt

//var num:number = +numS;
pyramid(num);