/*         --- Learning objectives:

- Build and use objects, arrays, functions.
- Handling bugs and errors using try, catch, throw and defensive programming

*/
// D.R.Y. - Don't repeat yourself


//      Simple function:
function addNum(a,b){
    c = a + b;
    console.log(c);
}
// addNum(2,4); // function invocation 'call'



//          --- Looping and Iterating With Functions  ---

let arr = ["Eat","Sleep","Code","Repeat"];
function listArrayItems(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == "Sleep"){
            console.log(i, "Set alarm for 6:00am,", arr[i])
        }else{
            console.log(i + 1, arr[i]); //displaying the array item where the index is equal to 'i'
        }
    }
}
// listArrayItems(arr);


function letterFinder(word,match){
    for(let i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log("Found the", match, "at", i);
        }else {
            console.log("No match found at", i)
        }
    }
}
// letterFinder("test","t");




//          ---Dot Notatation, Object Literals, and Bracket Notation---

//creating videogame characters with two different methods
let mainCharacter = {}; //creating an empty object

mainCharacter.health = 100; // adding key: values, retroactively 
mainCharacter.attack = 20;
mainCharacter.defense = 50;
mainCharacter.gold = 500;

let goblinCharacter = {
    health: 100,
    attack: 15,
    defense: 20,
    gold: 100
}; 

// // console.log("Hero -", mainCharacter);
// // console.log("Hero's health:", mainCharacter.health);

//using bracket notation to evaluate an expression
let arrOfKeys = ["health","attack","defense","gold"];
// for(let i = 0; i < arrOfKeys.length; i++){
//     console.log(goblinCharacter[arrOfKeys[i]])
// }

let charactersHouse = {
    value: 15000,
    location: "City-center",
    material: ["wood","stone","brick"]
}
// console.log("Hero's house is made mostly of:",charactersHouse.material[1]);
charactersHouse.windows = 4;
// console.log(charactersHouse);


// Bracket noation to create an object:
let house2 = {};
house2["value"] = 12000;
house2["location"] = "country-side";
house2["material"] = ["mud","sticks","straw"];

// console.log(house2);

//          ---Arrays are Objects---

//push() to add item 
//pop() to remove last item

let sodas = ["coke","pepsi","Dr.Pepper","Gingerale"];
sodas.push("Fanta");
// console.log(sodas);
sodas.pop();
// console.log(sodas);
sodas.push("Orange","Cherry")
// console.log(sodas);



function arrayBuilder(one,two,three){
    let arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    // console.log(arr);
    return(arr);
}
// arrayBuilder("Apple","Pear","Mango");

let simpleArr = arrayBuilder("Dog","Cat","Hamster");
// console.log(simpleArr);




//          ---Math Object Cheat Sheet---

//---Number Constants

// PI - Math.PI  ~ 3.14159
//Euler's constant - Math.E ~ 2.718
//Natural logarithim of 2 - Math.LN2 ~ 0.693

//---Rounding Methods

//Math.celi() - rounds up to the closest integer
//Math.floor()- rounds down to the closest integer
//Math.round() - rounds up to the closest integer if the decimal is .5 or above, otherwise rounds down.
//Math.trunc() - trims the decimal, leaving only the integer

//----Arithmetic and calculas methods

//Math.pow(2,3) - calculates first argument to the power of second argument 
//Math.sqrt(16) - calculaes the square root of 16
//Math.cbrt(8) - calculates the cube root
//Math.abs(-10) - calculates the absolute value ie: 10.