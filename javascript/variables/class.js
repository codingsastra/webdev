/**
console.log("Hello Variables");
console.log("I am Varma");

var myName = "Varma Bhupatiraju";
console.log("I am " + myName);

var myFirstName;

myFirstName="Varma";
console.log(myFirstName);

var myLastName;
console.log(myLastName);

//var 1card="Spades"; //Error You can't start with number or special charecter

//No special charecters allowed in variable names
myLastName="Bhupatiraju";
//+ operator
var myFullName=myFirstName + ' ' + myLastName;
console.log(myFullName);

console.log(typeof(myFirstName));

var x=10;
var y=5;
var z=x+y;
console.log(z);

console.log(myFirstName+x);

console.log(Math.random());

**/

/**
var a = 2;

function foo() {
    var b = 3;
    console.log("first " + b);
}


if(true){
  var c=4;
  console.log("third " + c);
}

foo();

//console.log("second " + b);
console.log("fourth " + c);

**/

var a = 2;

if(true){ //Block
    (function(){

       //Private scope
       var a=7;
       console.log("a in IIF: " + a);
       //.....
    })();
}

function foo() {
    var a = 3;
    console.log(a); //3
}

foo();
console.log(a); //??


var person={ name:"Varma", age:42};

function getProfile(){
    return {
        name: this.name,
        age: this.age
    }
}

getProfile(person); //Undefined values

getProfile.call(person); //Works


var student={name: 'Varma', company: 'Stellent'}

(function(){
	console.log("test");
})();
