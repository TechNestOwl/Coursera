/*
two predominant programming paradigms:
 functional programming and object-oriented programming
*/

//FP - In functional programming, I can solve problems by sepreating the data from the function. Ex - passing data as arguments in a functions parameters
//OOP - Whereas in object oriented programming, you combine both data and functions into objects.

//FP example:
let mph = 60;
let h = 2;

function calculateDistance(a,b){
    return a * b
};
// console.log("distance travled is:",calculateDistance(mph,h))


//OOP example:

let virtualPet = {
    sleepy: true,
    nap: function(){
        this.sleepy = false;
    }
};

// console.log(virtualPet)
virtualPet.nap(); //pet gets a nap
// console.log(virtualPet) //pet is no longer sleepy

/*
OOP helps us model real-life objects.
It works beset when the grouping of properties and data
in an object make logical sense. 
*/


//Simply put: 
//FP works by keeping the data seperate from the functionality.
//OOP works by keeping the data and functionality grouped in meaningful objects.




//          ---Recursion---

let counter = 3;

function example(){
    console.log(counter);
    counter = counter - 1;
    if(counter === 0) return;
    example();// when a function calls itself, this is know as "Recursion"
};
//make certain there is an exit statment so the function does not run endlessly
// example(); 





//          ---Scope---

//global- code written oustide of a function can be accessed 'globally'
//local - code written inside a functin is limited to the scope of that function.
// ie: if a variable is defined inside of a function, it is scoped only to that function (local scope)

const globalScope = "accesed throughout the scope of the code";

() => {
    const localScope = "limited to function scope";
};

// Higher-order functions, accepts functionas as arguments, or returns functions when invoked






//Just came back from a week long vacation, time to run a few refresher drills: 

let vaycayStr = "I went to Disney this past week";
let vaycayArr = ["Magic Kingdom","Universal Studios","Diagon Alley","Volcano Bay","SeaWorld",1,2,3];
let vaycayMeals = {
   MagicKingdom : "CheeseBurger",
   Universal: "Fried Chicken Platter",
   VolcanoBay: "Nothing",
};

vaycayMeals.SeaWorld = "Banna Nut Muffin";
vaycayMeals["OliveGarden"] = "Chicken Pasta";

function homeDinner(a){
    if(a === "Night1"){
        return "Frozen Pizza";
    }else if(a === "Night2"){
        return "Chicken Frito";
    }else{
        return a + " Wrong input received.";
    };
;}

vaycayMeals.cookedMeals = homeDinner("Night2");
// console.log(vaycayMeals)

vaycayArr.pop()
vaycayArr.push("Outlet Mall")
// console.log(vaycayArr)




//          *** Default Parameters ***

function noDefaultParams(number){
    console.log("Result:", number * number);
};

//if I call the above function like this noDefaultParams(); --> Result will be NaN


function withDefaultParams(number = 10){
    console.log("Result:", number * number);
};
// default params allow me to build a function that will run with default argument values
// even if I don't pass it any arguments.

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
};

let fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // the value of bool1 is incorrect

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1=true){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
};

let betterEx = new WithDefaultParams();

betterEx.calculate();