console.log("Hello Arrays");
var myNumbers=[];

myNumbers.push("one");
myNumbers.push("two");
myNumbers.push("three");

console.log(myNumbers);

myNumbers.unshift("zero");
console.log(myNumbers); //add item to beginning of array

myNumbers.pop();
console.log(myNumbers);

myNumbers.shift();
console.log(myNumbers);

var myFruits=["orange","apple","mango","banana"];
myFruits.splice(2,0,"grape","strawberry");

console.log(myFruits);

myFruits.splice(2,1);
console.log(myFruits);

//join

var myLetters=["a","b","c"];
var s=myLetters.join();
console.log(s);
console.log(myLetters.join('|'));
console.log(myLetters.join(''));

//slice
var fruits = ["Banana", "Orange", "Apple", "Mango","Apple"];
var citrus = fruits.slice(1, 4);
console.log(citrus);

var isHTMLElement = function (txt)
{
  var startTag=txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
  var endTag=txt.slice(txt.lastIndexOf('<')+2, txt.lastIndexOf('>'));
  return startTag===endTag;
}

var getTagName = function (txt) {
  if(isHTMLElement(txt)){
    return txt.slice(txt.indexOf('<')+1, txt.indexOf('>'));
  }
  else {
    throw "Error: Not an HTML Element!";
  }
}

var mapToTags = function(arr){
   var tags = [];

   if(Array.isArray(arr))
   {
       tags=arr.map(function(e){
         if(isHTMLElement(e)){
           return getTagName(e);
         }
         else {
           throw "One of item is not an html element";
         }
       });
    }
    else
    {
        throw "Enter a valid array, filled with valid HTML elements";
    }

    return tags;
}
