/*         --- Learning objectives:

- Build and use objects, arrays, functions.
- Handling bugs and errors using try, catch, throw and defensive programming

*/

//String methods

/*
charAt()
concat()
indexOf()
lastIndexOf()
split()
toUpperCase()
toLowerCase()
*/

//Quick recap on iterating using a string as an example:
let str = "Good evening";
// console.log("Length of string is",str.length);
// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// "MerryChristmas".indexOf(r);//returns the first instance of "r"
//str.charAt(3)// returns character at index of 3
// str.lastIndexOf(e)// returns last instance of char "e"
// console.log("Mery-Christmas-ya-filthy-animal".split("-"))// chops list into an array of substrings at each instance of '-'




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

let letters = 'abc';
// console.log(letters.match(/a/));

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


let decimal = Math.random() * 10; //multiplying by 10 to get a larger number. 
// console.log(decimal)
let rounded = Math.ceil(decimal);
// console.log(rounded)


let clothes = [];
clothes.push("Orvis","Patagonia","Outdoor Research","The North Face","Perry Ellis");
clothes.pop();
clothes.push("Colombia");
// console.log(clothes[2]);

let favCar = {};
favCar.color = "Shadow Mica";
favCar.convertible = !false;
// console.log(favCar);

//When an object has a function as a property, this property is known as a "method" of that object.
//Example: 'log' is a function of the conosle object. ---> console.log();

let car = {
    mileage: "285000",
    color: "Shadow Mica",
    tires: "All-terrain"
};
car.turnKey = function(){
    console.log("Engine starts");
}
car.lightsOn = ()=>{
    console.log("Lights switched on");
}
// console.log(car.turnKey);
// car.turnKey();
// car.lightsOn();

let test = typeof("string?");
let test2 = typeof(3.14);
// console.log(test2)

//          ---Error handling----

//interesting caveat, syntax error cannot be caught with try-catch block

// try{
//     console.log(a+b);//neither of the two arguments are defined.
// }catch(errName){//named the caught error as an example. 
//     console.log(errName);//displaying the caught error on the console.
//     console.log("an error was caught, and saved in the error log");
// }
// console.log("program continues to run after the error was caught");

// try{
//     throw new TypeError();
// }catch(typeofError){
//     console.log(typeofError);
//     console.log("The error was caught")
// }
// console.log("program continues to run..")

//annonymous function
(y,z) => {
    y + z
};

function addTwoNums(a,b) {
    try {
        console.log(a + b)
    } catch(err) {
        console.log(err)
    }
};


//arrow function
let addTwoNumbz = (a,b) => {
    try{
        if(typeof(a) != "number"){
           throw new ReferenceError("the first argument is not a number")
        }else if(typeof(b) != "number"){
            throw new ReferenceError("second argument is not a number")
        }else{
            console.log(a+b);
        }
    }catch(err){
        console.log(err)
    }
};

addTwoNumbz(2,"2");// concat's the two - "2string"
console.log("Program continues running")

