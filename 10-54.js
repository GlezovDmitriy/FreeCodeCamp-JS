//10
const sum = 10 + 10;
//11
const difference = 45 - 33; 
//12
const product = 8 * 10;
//13
const quotient = 66 / 33;
//14
let myVar = 87;

// Only change code below this line
myVar++;
//15
let myVar = 11;

// Only change code below this line
myVar--;
//16
const ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;
//17
const product = 2.0 * 2.5;
//18
const quotient = 4.4 / 2.0; // Change this line
//19
const remainder = 11 % 3;
//20
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;
//21
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -=  15;
c -=  1;
//21
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;
//22
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;
//23
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
//24
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
//25
const myStr = "FirstLine\n\t\\\SecondLine\nThirdLine"; // Change this line
//26
const myStr = "This is the start."+" This is the end."; // Change this line
//27
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence."
//28
// Only change code below this line
const myName = "Dima";
const myStr = "My name is "+ myName + " and I am well!";
//29
// Change code below this line
const someAdjective = "good";
let myStr = "Learning to code is ";
myStr+= someAdjective;
//30
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
//31
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
//32
// Setup
let myStr = "Jello World";


// Only change code below this line
myStr="Hello World"; // Change this line
// Only change code above this line
//33
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
//34
// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
//35
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line
//36
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My "+ myAdjective +" " + myNoun +" "+ myVerb + " " + myAdverb; // Change this line
// Only change code above this line
//37
const myArray = ["str", 5];
//38
// Only change code below this line
const myArray = [["Bulls", 23], ["White Sox", 45]];
//39
const myArray = [50, 60, 70];

const myData = myArray[0];
//40
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
//41
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];
  //42
push
  //43
  // Setup
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
// Only change code below this line
//44
// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line
//45
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Only change code below this line
//46
const myList = [["Milk", 2], ["cheese", 4], ["bread", 3], ["tea", 2], ["coofe", 1]];
//47
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction()
//48
function functionWithArgs(arg1, arg2) {
  console.log(arg1+arg2);
}
functionWithArgs(3,5);
//49
function timesFive(num) {
  return num*5;
//50
function timesFive(num) {
  return num*5;
}
//51
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//52
function myLocalScope() {
  // Only change code below this line
let myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//53
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//54
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum+5;

}

// Only change code above this line

addThree();
addFive();
//55
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
//56
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();
  
  
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//57
function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}
//58

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) { 
  return "Yes, that was true";
}
return "No, that was false";


  // Only change code above this line

}
//59
 // Setup
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);
//60
// Setup
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
  //61
  // Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
}
//62
// Setup
function testNotEqual(val) {
  if (val!=99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
//63
// Setup
function testStrictNotEqual(val) {
  if (val!==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


testStrict(10);
//61
function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//62
function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
//63
function testLessThan(val) {
  if (val<25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
//64
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
//65
function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
//66
function testLogicalOr(val) {
  // Only change code below this line

  if (val<10 || val>20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
//67
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);
//68
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
}
}
testElseIf(7);
//68
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10"; 
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
//69
function testSize(num) {
  // Only change code below this line
if (num<5){
  return "Tiny";
} else if (num<10){
  return "Small";
} else if (num<15) {
  return "Medium";
} else if (num<20){
  return "Large";
} else if (num>=20){
  return "Huge";
}

  return "Change Me";
  // Only change code above this line
}

testSize(7);
//70
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes ==1){
    return names[0];
    } else if (strokes<= par-2){
      return names[1];
    } else if (strokes == par-1){
      return names[2];
    }else if (strokes== par){
      return names[3];
    }else if (strokes== par+1){
      return names[4];
    }else if (strokes== par+2){
      return names[5];
    }else if (strokes>= par+3){
      return names[6];}    
    
    
    
    
    
    // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);
//71
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val){
  case 1:
  answer = "alpha";
  break;
  case 2:
  answer = "beta";
  break;
  case 3:
  answer = "gamma";
  break;
  case 4:
  answer = "delta";
  break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);
//72
