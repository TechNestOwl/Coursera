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