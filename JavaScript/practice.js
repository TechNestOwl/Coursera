//console.log('hello world');

//changing font and color 
//console.log("%cHello World","color:blue; font-size:40px");


//And operator '&&'
//Using double amperstan to join to comparisons.
// && returns of boolean value of either true or false. If both values on either side are true, the boolean return is true, otherwise it will return false
// console.log(false && false);
// let currentTime = 10;

// console.log(currentTime > 10 && currentTime < 20);


/* 
    || operator "or"

    The || operator checks to see if either comparison is true.
    The || operator will ALWAYS return true, unless both evaulations are false. 

*/
// let newNumb = 12;
// console.log( newNumb < 10 || newNumb > 100 );

// let timeRemaining = 2;
// let energy = 10;

// console.log(timeRemaining < 1 || energy < 1, "game over")

// console.log("Game Over:", timeRemaining == 0 || energy == 0);


//Not operator !

// Effectively flips the boolean value. ie:
// let hungryDog = true;
// console.log("the dog has been fed, is she still hungry?", !hungryDog); //returns 


// The modulus operator returns the reaminder of a division.
/* A restaurant has 5 tabels with 4 seats each.
    22 guests arrive. How many guests will be without a seat?
*/ 
//  let restaurant = 5;
//  let guests =22;

//  console.log(guests % restaurant, "Guests will be without a seat");

// The strict inequality operator does the same but also checks for data type.

// console.log( 5 !== "5");
// returns true because the arguments are of different data types. 


//      ---Using the modular opertor % ---

let num1 = 2;
let num2 = 89;

let test1 = num1 % 2; //returns the raminder 
let test2 = num2 % 2; 

let result1 = test1 == 0;
let result2 = test2 !== 0;

console.log(`Is ${num1} an even number?`, result1);// determine if num1 is even
console.log(`Is ${num2} an odd number?`, result2);// determine if num2 is odd