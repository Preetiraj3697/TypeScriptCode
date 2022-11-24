var x:number = 10;
console.log(x);
var message:string = "Hello World" 
console.log(message);

// class Greeting1 { 
//     greet():void { 
//        console.log("Hello World!!!") 
//     } 
//  } 
//  var obj = new Greeting(); 
//  obj.greet();

 var name2:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name2) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 