
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine(){
        console.log("engine is on")
    }

}

class OffRoader extends Car {
    startEngine(){
        super.startEngine();
        console.log("engine is purring")
    };
    engage4WhelDrive(){
        console.log('4 Wheel drive has been engaged')
    }

};

let car1 = new OffRoader('Toyota','4Runner');

// console.log(car1);
// car1.startEngine();
// car1.engage4WhelDrive();


class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightStatus(){
        console.log("Lights on?", this.lightsOn)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
};

let firstTrain = new Train("blue", true);

//even though these two have the exact same properties, they are still seperate objects. 
let secondTrain = new Train("Red", false);
let thirdTrain = new Train("Red", false);


// thirdTrain.getSelf();
thirdTrain.toggleLights();
// thirdTrain.getSelf();


class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn); // super is used to specify what proprty gets inherited from the super-class in the sub-class. 
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        // console.log('High speed status: ', this.highSpeedOn)
    }
    toggleLights(){
        // inheriting these two methods below from the super class, then adding a third line - console.log
        super.toggleLights();
        super.lightStatus();
        console.log("light's are operational");
    };
};


let fastTrain = new HighSpeedTrain(10,false,"Silver",false);

console.log(fastTrain)

// notice how these methods automatically get inherited from the train super class. 
fastTrain.toggleLights();
// fastTrain.toggleHighSpeed();

fastTrain.getPrototype();
