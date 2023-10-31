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
shoePurchase2.totalPrice(); // accessing the totalPrice method using dot notation


//functional programming
var shoes = 100; 

let stateTaxt = 1.2;

function totalPrice(shoes, tax){
    return shoes * tax;
};
let toPay = totalPrice(shoes,stateTaxt);



