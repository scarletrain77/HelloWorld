//var prompt = require('C:\Program Files (x86)\Egret\Egret Wing 3\resources\app\extensions\typescript\server\typescript\lib\lib.d.ts');
function pyramid(a) {
    for (var i = 1; i <= a; i++) {
        var b = '';
        for (var j = 0; j <= a - i - 1; j++) {
            b += ' ';
        }
        for (var k = 1; k <= 2 * i - 1; k++) {
            b += '*';
        }
        console.log(b);
    }
}
//var numS:string = prompt("请输入一个数字","");
//var num:number = +numS;
var numS = process.argv[2];
//var num:number = parseInt(numS);
pyramid(parseInt(numS));
