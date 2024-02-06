let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
    birdFunc: () => {
        console.log("I'm a bird")
    }
};// this bird object is my prototype

let hawk1 = Object.create(bird);// creating a new object instance that is inheriting from bird object.
let eagle1 = Object.create(bird);


// hawk1.birdFunc();

// console.log("Hawks have feathers", hawk1.hasFeathers);


let penguin = Object.create(bird);

penguin.canFly = false; // changing this one value in the penguin object.

console.log(penguin)