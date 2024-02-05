
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

console.log(car1);
car1.startEngine();
car1.engage4WhelDrive();