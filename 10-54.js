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