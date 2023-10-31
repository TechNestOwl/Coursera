//The four fundamental OOP principles are: 
/*
    -Inheritance
    -Encapsulation
    -Abstraction
    -Polymorphisim


    The thing to remember about Objects is that they exist in a hierarchal structure.
     Meaning that the original base or super class for everything is the Object class,
     all objects derive from this class. This allows us to utilize the Object.create() method. 
    to create or instansiate objects of our classes.

*/



//          *** Inheritance ***
/*
    -Base class
    -Sub-class
    
    There can be multiple sub-classes. The next up class in lexical scope is refered to as the "super-class".
    Each sub-class inherits from it's super-class.
*/
class Car{ /* ...class code here... */}
class Toyota extends Car { /* ...class code here... */}
class landCruiser extends Toyota { /* ...class code here... */}

//each subclass of car is inheriting from its super-class.



//          *** Encapsulation ***

/*
    In simple terms, encapsulation has to do with making code implementation 'hidden' in the sense
    that they don't have to worry about how the code works in order to use it. 

    for example: 'abc'.toUpperCae();

    Gennerally, I don't need to worry about how the underlying syntax of toUpperCase() works, so long as it does
    not break my code. 
*/


//          *** Abstraction ***
/*
    Often confused with Encapsulation because their differences can feel blury.

    - Abstraction is about extracting the 'concept' of what you're trying to do,
        rather than dealing wiht a specific manifestation of that concept.
    - Encapsulation  is about not having access to, or not being concerned with how some
     implementation works internally.

    More research and expirence is required for me to understand more thouroghly. 
*/

//          *** Polymorphisim ***
/*
    Greek for "multiple forms"

    In code, a class can have a method that changes depending on the context.
    ex: a ringBell() method can be different whether attached to a Bike object or FrontDoor Object
*/

let bicycle = {
    bell: function(){
        return ("Ding, ding, out of the way!");
    }
};

let frontDoor = {
    bell: function(){
      return ("Ding, ding, come here please.");
    }
};

// frontDoor.bell();// "...come here please"
// bicycle.bell()// "...out of the way!"

function ringTheBell(obj){
    console.log(obj.bell())
};
// ringTheBell(bicycle);



//another example of Polymorphisim - concat() method.
"abc".concat("def"); // "abcdef"

["abc"].concat["def"];// ["abc","def"]

["abc"]+["def"]// ["abcdef"]

//the concat() method is exhibiting polymorphisim based on the context. lines 90 and 92

//my example of polymorphisim in classes:
class Automobile{
    reFuel(){
        console.log("Engine needs fuel")
    }
};

class SemiTruck extends Automobile {
    reFuel(){
        super.reFuel()
        console.log("Diesel")
    }
};

class EconomyCar extends Automobile{
    reFuel(){
        super.reFuel();
        console.log("Regular Unleaded")
    }
};

class ElectricVehicle extends Automobile{
    reFuel(){
        console.log("Plug into outlet for recharging")
    }
};

let peterBuilt = new SemiTruck();
let toyotaCarolla = new EconomyCar();
let tesla = new ElectricVehicle();

tesla.reFuel();
peterBuilt.reFuel();
toyotaCarolla.reFuel();

/*
    All three of the sub-classes extend from the super-class of Automobile.
    Both the SemiTruck and EconomyCar inherit the reFuel() method.
    The ElectricVehicle sub-class has it's own implementation of the reFuel() mehtod, though it
    still extends from the Automobile class. 
*/











let dog = {
    breed: "Border-collie",
    weight: 60,
    hungry: true,
};

dog.feed = (a) => {
    if(a == true){
        console.log("feed dog");
        // return "dog needs to be fed.";
    }else{
        console.log("Don't feed dog");
        // return "dog does not need feeding."
    };
};

// dog.feed(dog.hungry);

//Function that calcualtes total cost of buying a pair of shoes (+tax)

let shoePurchase = {
    cost: 20,
    tax: 1.06,
    totalPrice: (a,b) => { // DO NOT use arrow functions as methods. !!!!
        console.log(a * b)
        // return a * b;
    },
};
// shoePurchase.totalPrice(shoePurchase.cost,shoePurchase.tax); // passing the arguments this way seems cumbersome. Let's refactor.

let shoePurchase2 = {
    cost: 100,
    tax: 1.06,
    totalPrice: function(){
        let calculation = this.cost * this.tax;
        console.log("Total sale price is:", calculation)
    }
};
// shoePurchase2.totalPrice(); // accessing the totalPrice method using dot notation


//functional programming
var shoes = 100; 

let stateTaxt = 1.2;

function totalPrice(shoes, tax){
    return shoes * tax;
};
let toPay = totalPrice(shoes,stateTaxt);


