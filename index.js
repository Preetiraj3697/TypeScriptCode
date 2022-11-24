var x = 10;
console.log(x);
var message = "Hello World";
console.log(message);
// class Greeting1 { 
//     greet():void { 
//        console.log("Hello World!!!") 
//     } 
//  } 
//  var obj = new Greeting(); 
//  obj.greet();
var name2 = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name" + name2);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
