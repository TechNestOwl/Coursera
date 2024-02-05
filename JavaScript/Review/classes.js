
/**
 Think of class as a blueprint I can repeatedly use to create new objects of a certain kind.
 */

class Car {
    constructor(color,speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log("Turbo is on!")
    }
};

let car1 = new Car("red",200);


// car1.turboOn();

/*
    Benefits of OOP
    - Allows me to write modular code
    - Makes my code more flexible
    - Makes my code reuasable
*/

// Objects exisit in a hieratchal structure, the origanl base class is the SUPER CLASS in which 
// all other classes inherit. i.e. ( each sub-class inherits from its super- class)

// Four principles of OOP

/**
 * Inheritance
 * Encapsulation
 * Abstraction
 * Polymorphisim
 */


//      ** Inheritance ** 

// Use the keyword 'extends' to setup the inheritance relationship


class Animal {/* ... class code goes here */};

class Pet extends Animal {/* ...class code goes here*/};

class Dog extends Pet {/*... you know what goes here */}




//      ** Encapsulation **

/* In simple terms, encapsulation has to do with making implementation 'hidden' from the other useers
    in the sense they don't have to know how to code works in order to use it('consume the code').
    
    Example: "abc".toUpperCae()

    I don't have to bother with the underlying syntax of toUpperCase(). As long as it doesn't break my program.
*/


//      ** Abstraction **

// Abstraction is about writing code in a way that will make it more generalized.



//      ** Polymorphisim **

// derived from the greek language, polymorphisim meanin is "multiple forms" ( somehting that can take on many forms/shapes)

//Example, a bell which is a property of a door can also be a property of bicycle. Though the two bells have different intents...

const door = {
    bell: function(){
        return ("Ring Ring, come over here.")
    }
};

const bicycle = {
    bell: function(){
        return("Ring Ring, out of the way please!")
    }
};

bicycle.bell(); // returns "Ring Ring, out of the way please!"
door.bell(); // returns "...come over here"

// so the exact same method can have two differentt, if not oppopsite, outcomes. 


// this function accepts an object as its param and will call the bell() method atached to that object. 
function ringTheBell(obj){
    console.log(obj.bell())
};

// ringTheBell(door);


// Real world example: the concat method

"abc".concat("def"); // returns 'abcdef'

["abc"].concat["def"] // return ['abc','def']

// .concat() is exhibiitng polymorphisim since it behaves differently based on the context- in this case, based on the data types it receives. 


class Bird {
    useWings(){
        console.log('Flying')
    }
}

class Eagel extends Bird {
    useWings(){
        super.useWings(); // using the original mehtod and extending the new console.log below.
        console.log("and soaring high!")
    }
}

class Penguin extends Bird {
    useWings(){// inheriting the useWings method, but changing it's output to the one below. 
        console.log("Swimming!")
    }
}


let baldEagel = new Eagel();
let happyFeat = new Penguin();

baldEagel.useWings();
happyFeat.useWings();