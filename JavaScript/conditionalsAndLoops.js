//console.log('hello world');

//changing font and color 
//console.log("%cHello World","color:blue; font-size:40px");

//          ---Operators---


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


//      ---Using the modulas opertor % ---

// let num1 = 3;
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

//switch practice

let dogDuties = "thirsty";
let verifiedDutiesInput = (a) => {
    if(typeof(a) == "string"){
        return a;
    }else{
        console.log("input is not valid")
    };
}
let petAction = (a) => {
    switch(a){
        case "thirsty":
            console.log("Doge needs water");
            break;
        case "hungry":
            console.log("doge needs to be fed");
            break;
        case "restless":
            console.log("doge needs to be taken for a walk.")
            break;
        default:
            console.log("doge is content")
            break;
    };
};
// petAction(verifiedDutiesInput(dogDuties));


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

// let ovenTemp = 0;
//this is example is a poor representation of when to use a switch statment. An if statement would be better.
// switch(ovenTemp){
//     case 0:
//         console.log("The oven needs to finish preheating");
//         break;
//     case 200:
//         console.log("oven is halfway there");
//         break;
//     case 400:
//         console.log("oven is fully preheated");
//         break;
// }

// let weight = 180;
// let scale = "";

// if (weight > 350){ 
//     console.log("You have broken the scale")
// }else if( weight < 100){
//     console.log("eat some food!")
// }else {
//     console.log("Kind of wide range, but okay, you're 'healthy'")
// }


//          ---Looping Constructs---


//          --- FOR LOOP ---
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

// for(i =1; i <= 5;i++){
//     console.log(i);
// };
// if(i = 5){console.log("Counting complete!")};

// for( i=5; i>=1; i--){
//     console.log(i);
// }

// let food = "cooked";
// if (food == "cooked"){
//     console.log("the food is ready to be served");
// }else{
//     console.log("the food needs to continue cooking.");
// }


//          --- WHILE LOOP ---

// let i = 1;

// while(i<=10){  //I'm giving js an expression to check, if truthy, run the procceding block of code.
//     console.log(i);
//     i++;
// }

// let counter = 1;
// while(counter <= 5){
//     console.log(counter);
//     counter ++;
// }
// if (counter = 5){
//     console.log("Counting completed!");
// }
// let year = 2018;
// while( year <= 2023){
//     console.log(year);
//     year++;
// }





//          --- NESTED LOOPS ---

// Do not get carried away with nested loops. More levels = less performance and more complications.

// Here I am creating a nested loop for work days in a week:
// for(i=1; i<=2; i++){
//     for(d=1; d <=5; d++){
//         console.log("Week "+ i + " day " + d);
//     }
// };

//Division

// for(i=100; i > 9; i = i - 10){
//     for(j=10; j > 4; j = j-5){
//         console.log(i + " divided by " + j + " equals " + i/j);
//     }
// };

// let cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (let i = 0; i < cubes.length; i++) { // cubes.length returns the number of characters in cubes
//     let styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles) // cubes[i] targets each indiviual item in the string based on the current value of i. ie: when i = 0 is "A"
// }




//***** broken code ******** needs further investigation
// for(let i = 0; i < placement.length; i++){
//     if(i=0){
//         console.log("Gold Medal");
//     }else if(i = 1){
//         console.log("Silver Medal")
//     }else if(i = 2){
//         console.log("Bronze Medal")
//     }else{console.log(placement[i])}
// }

// for(let i = 1; i <= 10; i++){
//     if(i ==1){
//         console.log("Gold Medal")
//     }else if(i == 2){
//         console.log("Silver Medal")
//     }else if(i == 3){
//         console.log("Bronze Medal")
//     }else{
//         console.log(i)
//     }
// }

//same as above but with a switch statement

// for(let i = 1; i <= 10; i++){
//     switch(i){
//         case 1:
//             console.log("Gold Medal")
//             break;
//         case 2:
//             console.log("Silver Medal")
//             break;
//         case 3:
//             console.log("Broze Medal")
//             break;
//         default:
//             console.log(i)
//         }
// }


// let i = 3;
// let j = 5;

// if(i == 3 && j < 5){
//     console.log("hello")
// }else{
//     console.log("goodbye")
// }