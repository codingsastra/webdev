console.log("Hello Conditionals");

var maxOfThree=function(numA,numB,numC)
{
  var big1=maxOfTwo(numA,numB);
  return maxOfTwo(numC,big1);
}

var maxOfTwo = function(x,y){
  if(x>y){
    return x;
  }
  else {
    return y;
  }
}

var add = function(a,b,c){
  if(!isNumber(a) || !isNumber(b) || isNumber(c))
  {
    alert("All arguments should be numbers");
  }
  else
  {
    return a+b+c;
  }
}

var isNumber=function(n){
  if(typeof(n)==="number"){
    return true;
  }
  else {
    return false;
  }
}

add(1,2,3);

add("a",2,3);
