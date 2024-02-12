/**
  Remember:
   JSON strings are double quotes "".

   Valid JSON does not allow the use of functions || comments 

   When you stringify a js Object containg a method, that method 
   will be excluded from the stringify operation
  

 */

 
let jsonStr = '{"greeting":"Hello"}'

let plainObj = JSON.parse(jsonStr);
 // parsing through the json data and creating a js object


plainObj.greeting = "new value";// altering new obj
console.log(plainObj);


let convertedObj = JSON.stringify(plainObj);
// converting plainObj into JSON strring


console.log(convertedObj);


const data = {
    firstName: "Jim",
    lastName: "Bob",
    age: 30,
    occupation: "Software Developer",
};

let jsonData = JSON.stringify(data);

console.log(jsonData);