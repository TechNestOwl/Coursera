
class StationaryBike {
    constructor(location, gears){
        this.location = location;
        this.gears = gears;
    };
};

class TreadMill{
    constructor(location, speed){
        this.location = location;
        this.speed = speed;
    }
};

class Gym{
    constructor(hours,bikeLocation,TreadMillLocation){
        this.hours = hours;
        this.bikeLocation = new StationaryBike(bikeLocation, 10);
        this.TreadMillLocation = new TreadMill(TreadMillLocation, 20);
    }
};

let planetFitness = new Gym("24-7","Front row","Back row");

console.log(planetFitness);


/**
    In this example, there are 3 classes. 

    The stationary bike class is coded so that it's future instances will have 
    position and gears properties. Theh location describes where the bike is in the gym.
    Same for the treadmill.

    The Gym class takes three params in it's contructor. 

    This code will allow me to create multiple gyms with various hours,  stationary bikes,
    and treadmills positions.  

 */