// This is a single line comment

/* This is a
    multiple line
    comment */

// var myName;

// var a;
// a = 7;
// var b;
// b = a;

// var a = 9;

var myFirstName = "First name";
var myLastName = "Last name";


// var a = 5;
// var b = 10;
// var c = "I am a";

// a = a + 1;
// b = b + 5;
// c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";


const FCC = "freeCodeCamp"; 
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;
console.log(sum);

const difference = 45 - 33;
console.log(difference);

// const product = 8 * 10;
// console.log(product);

// const quotient = 66 /33;
// console.log(quotient);

// let myVar = 87;
// myVar++;

// let myVar = 11;
// myVar--;

const myDecimal = 4.7;

const product = 1.0 * 5.0;
console.log(product);

const quotient = 4.4 / 2.0; 
console.log(quotient);

const remainder = 11 % 3;
console.log(remainder);

// let a = 3;
// let b = 17;
// let c = 12;

// a += 12;
// b += 9;
// c += 7;
// console.log(a,b,c);

// let a = 11;
// let b = 9;
// let c = 3;

// a -= 6;
// b -= 15;
// c -= 1;
// console.log(a,b,c);

// let a = 5;
// let b = 12;
// let c = 4.6;

// a *= 5;
// b *= 3 ;
// c *= 10;
// console.log(a,b,c)

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
console.log(a,b,c)

// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// console.log(myStr);

// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr);

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// const myStr = "This is the start. " + "This is the end.";
// console.log(myStr);

// let myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr);

// const myName = "Ravinder Singh";
// const myStr = "My name is " +myName+ "and I am well!";
// console.log(myName,myStr);

const someAdjective = "easy and fun";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr,someAdjective);


// let lastNameLength = 0;
// const lastName = "Lovelace";

// lastNameLength = lastName.length;


// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// firstLetterOfLastName = lastName[0]; 


// let myStr = "Jello World";


// myStr = "Hello World"; 



// const lastName = "Lovelace";
// const thirdLetterOfLastName = lastName[2]; 


// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length - 1];



// const lastName = "Lovelace";
// const secondToLastLetterOfLastName = lastName[lastName.length - 2];


// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks = myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb;

// const myArray = ["Ravinder", 22];

// const myArray = [["Bulls", 23], ["White Sox", 45]];


// const myArray = [50, 60, 70];
// var myData = myArray[0];



// const myArray = [18, 64, 99];
// myArray[0] = 45;


// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
//   ];
  
//   var myData = myArray[2][1];



// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// const myArray = [["John", 23], ["cat", 2]];
// var removedFromMyArray = myArray.pop();

// const myArray = [["John", 23], ["dog", 3]];
// var removedFromMyArray = myArray.shift();



// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);


// const myList = [["Chocolate", 10], ["Banana", 10], ["Apple", 5], ["Grapes", 20], ["Pineaple", 5]];


// function reusableFunction() {
//     console.log("Hi World");
//   }
  
//   reusableFunction()
 
  
//   function functionWithArgs(a, b) {
//     console.log(a + b);
//   }
//   functionWithArgs(10, 5);

  
//   function  timesFive(num) {
//     return num * 5;
//   }
  
//   const answer = timesFive(5);




// let myGlobal = 10;
// function fun1() {
//     oopsGlobal = 5;
// }
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }


// function myLocalScope() {
//     let myVar =5;
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
//   console.log(myVar);
//   console.log('outside myLocalScope', myVar);



// var outerWear = "T-Shirt";
// function myOutfit() {
//     var outerWear = "sweater";
//     return outerWear;
// }

// myOutfit();



// let sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// function addFive(){
//   sum = sum +5;
// }
// addThree();
// addFive();


// let processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed=processArg(7);




function nextInLine(arr, item) { 
    var queue = arr.push(item);
  
    var removeItem = arr.shift();
  
    return removeItem;  
  }
  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); 
  console.log("After: " + JSON.stringify(testArr));



  function welcomeToBooleans() {
    return true;
  }


  
  function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}


function testEqual(val) {
    if (val==12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);


function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  testStrict(10);




function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
   compareEquality(10, "10");



function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);



  // Setup
function testStrictNotEqual(val) {
    if (val!== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);




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




  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >= 25) {
      return 'Yes';
    }
  
    // Only change code above this line
    return "No";
  }
  
  // Change this value to test
  testLogicalAnd(10);



  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);



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



  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if(val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  
  }




  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }


  function testSize(num) {
    // Only change code below this line
  
    if (num < 5) return "Tiny";
  
    else if (num < 10) return "Small";
  
    else if (num < 15) return "Medium";
  
    else if (num < 20) return "Large";
  
    else return "Huge";
  
    // Only change code above this line
  }
  
  // Change this value to test
  testSize(7);



  function golfScore(par, strokes) {
    // Only change code below this line
  
    if (strokes === 1) return "Hole-in-one!";
  
    else if ((strokes - par) <= -2) return 'Eagle';
  
    else if ((strokes - par) === -1) return 'Birdie';
  
    else if (strokes === par) return 'Par';
  
    else if ((strokes - par) === 1) return 'Bogey';
  
    else if ((strokes - par) === 2) return 'Double Bogey';
  
    else return 'Go Home!';
    // Only change code above this line
  }
  
  // Change these values to test
  golfScore(5, 1);