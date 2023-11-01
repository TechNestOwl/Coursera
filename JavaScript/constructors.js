// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc..

//these objects are sometimes referred to as "native objects"
// note that all the constructos are capatalized

//To use a constructor, I must prepend it with the operator "new".
//not all built-in objects require a constructor.
// ex:
 let currentDate = new Date();


/*
Other built-in objects that don't have constructors, such as the Math object, don't need
a constructor. They're just static objects whose properties and methods can be accessed directly,
from the built-in object itself. In other words, there is no point in building an instance of 
the built-in Math object to be able to use its functionality.

For example, if I want to use the pow method of the Math object to calculate exponential values, 
there's no need to build an instance of the Math object to do so. For example, to get the number 2
 to the power of 5, I'd run:

Math.pow(2,5); // --> 32

There's no need to build an instance of the Math object since there would be nothing that needs 
to be stored in that specific object's instance.


*/

//Besides constructor functions for the built-in objects, I can also define custom constructor functions
//ex:

function IceCream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`The ${this.flavor} icecream has melted.`);
    }
};
//now I can make as many Icecream as I want

let chocoChip = new IceCream("chocolateChip");
let sardineIceCream = new IceCream("Sardine");// Yum!
// console.log(sardineIceCream);
//Here I've built two instances of IceCream type



let apple = new String("apple");
apple; // ---> String("apple")

let pear = "pear";
pear; // ---> "pear"

/*
The pear variable is a string literal, that is, a primitive Javascript value.

The pear variable, being a primitive value, will always be more performant than the apple variable, which is an object.

Besides being more performant, due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object,
 even when their values are identical.
*/