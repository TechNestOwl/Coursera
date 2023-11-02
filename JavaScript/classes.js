class Car { // Class keyword followed by the name of the new class with an UPPERCASE letter
    constructor(color,speed){ // the constructor passes parameters to all future objects in this class
                              // it is the constructor that is used when instantiating new objects.
        this.color = color;
        this.speed = speed;
    }
    turboOn(){ // Do not use function keyword, just the name of the method.
    console.log("Turbo is spooling up.");
    }
}

// inheritance in JavaScript is based around the prototype object.
//All objects that are built from the prototype share the same functionality.

class Train {
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn; // using the logical operator "!" to change the value of this.lightsOn
    }
    lightsStatus(){
        console.log("Lights on?", this.lightsOn); // this just reports the current vlaue/status of the lightsOn variable
    }
    getSelf(){  // this method simply prints out the properties of th eobject instance it is called on.
        console.log(this);
    }
    getPrototype(){     // console logs the prototype of the object instance using javascripts built in Object.getPrototypeOf() method, and passing it 'this' object. 
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
};
//essesntially, this code allows me to do two things
//  1. this code allows me to build new instances of the Train class
//  2. Each object instance of the Train will have it's own custom properties of 'color' and 'lightsOn'

//Now, to acctually build a new instance of Train:

let firstTrain = new Train("blue",false);
// console.log(firstTrain);

//I can continue to build new instances of Train, even if they have the exact same properties,
//theyre are still seperate objects.

let secondTrain = new Train("blue",true);
let thirdTrain = new Train("red",true);
//I can also add methods to the train class which will be shared between all instances of Train.

let train4 = new Train("red", false);

train4.toggleLights();
// train4.lightsStatus();
train4.getSelf();
train4.getPrototype();

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightOn){
        super(color,lightOn); //inheriting from the super-class "Train"
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){ // adding an additional method to the HighSpeedTrain
        this.highSpeedOn = !this.highSpeedOn;
        console.log("high speed status:", this.highSpeedOn);
    }
    toggleLights(){
        super.toggleLights();
        super.lightsStatus();
        console.log("Lights are 100% operational.");
    }
};

let train5 = new Train("blue", false);
let highSpeed1 = new HighSpeedTrain(200,flase,"orange",flase);

