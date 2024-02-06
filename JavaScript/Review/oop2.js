// Desinging an OOP

// Creating classes in JS using all the concepts I've learned in this week's lessons. 

/**
    Inheritance Heirarchy:

                Animal
              /        \
            Cat          Bird
           /      \          \
       HouseCat  Tiger      Parrot


 */

class Animal{
    constructor(color,size,hungry,energy){
        this.color = color;
        this.size = size;
        this.hungry = hungry;
        this.energy = energy;

    }
    feedingTime(){
        if(this.hungry){
            console.log("It's time to feed!");
            return;
        }console.log("Not hungry")
    }
    feedAnimal(){
        if(this.hungry){
            this.hungry = !this.hungry;
            console.log("Animal has been fed");
            return;
        }console.log("Animal is no longer hungry.")

    }
    isActive(){
        if(this.energy > 0){
            this.energy --;
            console.log(`Exertion has lowered energy to ${this.energy}`)
            return;
        }else if(this.energy == 0){
            console.log("Animal has succumbed to exhaustion.")
        };
    }
    sleep(){
        this.energy ++;
        console.log("Animal wakes with renewed energy");
    }
    getColor(){
        console.log(this.color);
    }
};

class Cat extends Animal {
    constructor(color,size,hungry,habitat,energy){
        super(color, size, hungry, energy);
        this.habitat = habitat;
    }
    locateHome(){
        console.log(this.habitat);
    }
};

class Bird extends Animal {
    constructor(color, size, hungry,canSpeak,energy){
        super(color, size, hungry,energy);
        this.canSpeak = canSpeak;
    }
    pollyWantCracker(){
        if(this.canSpeak){
            console.log("Polly want's a cracker");
            return;
        }console.log("Non-talking bird is perplexed.")
    }
};

class HouseCat extends Cat{
    constructor(color, size, hungry, habitat = "Can't find him",energy){// setting default value for habitat
        super(color, size, hungry, habitat);
    }
    feedAnimal(){
        super.feedAnimal();
        console.log("Garfield is always hugry...");
    }
};

class Parrot extends Bird{
    constructor(color, size, hungry,energy, canSpeak = true){
        super(color, size, hungry, canSpeak, energy);
    }
    pollyWantCracker(){
        super.pollyWantCracker();
        console.log("Parrot's always 'speak'");
    }
};
class Tiger extends Cat {
    constructor(color,size,hungry,habitat, energy){
        super(color, size, hungry, habitat, energy);
    }

};

let elephant = new Animal("grey","huge",true);
let garfield = new HouseCat("tabby", "small", true);// I did not pass garfield a location param, the default value will be used.
let kittyKat = new Cat("black","small",false, "Anywhere")
let robin = new Bird("red","xSmall",true,false);
let macaw = new Parrot("green","medium",false);// canSpeak has defaulted to true
let tony = new Tiger("Stripped", "large", true, "Siberia", 10)



