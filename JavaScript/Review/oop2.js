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
// Two essential keywords: extends & super


class Animal{
    constructor(color,size,hungry){
        this.color = color;
        this.size = size;
        this.hungry = hungry;
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
};

class Cat extends Animal {
    constructor(color, size,hungry, habitat){
        super(color, size, hungry);
        this.habitat = habitat;
    }
    feedingTime(){
        super.feedingTime();
        console.log("Garfield is always hungry")
    }
};

class Bird extends Animal {
    constructor(color, size, hungry, canSpeak){
        super(color, size, hungry);
        this.canSpeak = canSpeak;
    }
    pollyWantCracker(){
        if(this.canSpeak){
            console.log("Polly want's a cracker");
            return;
        }console.log("Non-talking bird is perplexed.")
    }
};

let elephant = new Animal("grey","huge",true);
let garfield = new Cat("tabby", "small", true, "Suburban");
let macaw = new Bird("green","xSmall",true,false);
