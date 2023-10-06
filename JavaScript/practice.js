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

// let num1 = 3.4;
// let num2 = 89;

// let test1 = num1 % 2; //returns the raminder 
// let test2 = num2 % 2; 

// let result1 = test1 == 0;
// let result2 = test2 !== 0;

// console.log(`Is ${num1} an even number?`, result1);// determine if num1 is even
// console.log(`Is ${num2} an odd number?`, result2);// determine if num2 is odd


//     --Concatenating numbers and strings--
// let now = "Now in ";
// let three = 3;
// let d = "D!";

// console.log(now + three + d);

// concatenating uisng += operator

// let counter = 0;
// counter += 5;
// counter += 3;

// console.log(counter);
// let num1 = 5;
// console.log(num1 + "test");


//      ---Conditional Statements---
// "flow condition statements"

// if (condition is true){
    //execute this code
//}

// if (result1 == true){
//     console.log (num1 + " is an even number");
// }else {
//     console.log(num1 + " is not an even number");
// }

// let placement = "fourth";

// if(placement == "first"){
//     console.log("GOLD")
// }else if (placement == "second"){
//     console.log("SILVER")
// }else if(placement == "third"){
//     console.log("BRONZE")
// }else {
//     console.log("You did not qulify");
// };

//      ---Switch---

// switch(placement){
//     case "first":
//     console.log("gold");
//     break;
//     case "second":
//         console.log("silver");
//         break;
//     case "third":
//         console.log("bronze");
//         break;
//     default:
//         //this block will run if none of the conditions above are met
//         console.log("You did not place.");
//         break;
// }

// let age = 10;

// if (age >= 65){
//     console.log("You are retired")
// }else if (age < 65 && age > 17){
//     console.log("You are part of the workforce")
// }else if(age <= 17){
//     console.log("You're not a contributing member of society");
// }else {
//     console.log("Enter a numerical value");
// }

// let day = "Monday";

// switch(day){
//     case "Monday":
//         console.log("Weekday");
//         break;
//     case "Tuesday":
//         console.log("Weekday");
//         break;
//     case "Wednesday":
//         console.log("Weekday")
//         break;
//     case "Thursday":
//         console.log("Weekday");
//         break;
//     case "Friday":
//         console.log("Weekday")
//     case "Saturday":
//         console.log("Weekend")
//         break;
//     case "Sunday":
//         console.log("Weekend")
//         break;
//     default:
//         //this block will run if no other conditions match
//         console.log("What day is it??")
//         break;
// }


let weight = 180;
// let scale = "";

// if (weight > 350){ 
//     console.log("You have broken the scale")
// }else if( weight < 100){
//     console.log("eat some food!")
// }else {
//     console.log("Kind of wide range, but okay, you're 'healthy'")
// }


//          ---Looping Constructs---

//FOR LOOP
//Used to automate repetittion or to itterate through.
//Set the value, specify the exit condition, increment the counter
// for (let i = 1; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 3; i >=1; i--){
//     console.log(i);
// }
// if(i=1){
//     console.log("GO!")
// }
//While loop

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }