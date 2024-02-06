// for of loops cannot work with objects since an object is not iterable. 
//ex:

const car = {
    color: "blue",
    engineSize: "V6",
    topSpeed: 200,

};

// for(prop of car){
//     console.log(prop)
// };  throws error because an object is not iterable


// Contrary to objects, arrays ARE iterable

const makes = ["Lexus","Toyota","Honda"];

for(let car of makes){
    console.log(car)
};// logs each element(car) in the array of cars




//  Built-in Methods

console.log(Object.keys(car)); // returns an array of strings of the objects keys

console.log(Object.values(car)); // similar to above, BUT returns values instead of keys

console.log(Object.entries(car)); 
// returns array of arrays containg string values in pairs of ['key','value'] of the passed in object
//[ [ 'color', 'blue' ], [ 'engineSize', 'V6' ], [ 'topSpeed', 200 ] ]


let dogBreed = {
    breed: "German Shepard",
    size: "large",
    inteligence: "Excelent",
    lifespan: 15,
};

for(let key of Object.keys(dogBreed)){
    console.log(key,":",dogBreed[key])// using bracket notation to access the value of the key 
};

const lexus = {
    engine: true,
    steering: true,
    speed: "slow",
};





const sportyLexus = Object.create(lexus);

sportyLexus.speed = "fast";

// console.log(sportyLexus);

for(prop in sportyLexus){
    console.log(prop + sportyLexus[prop])
};// this is also looping over sportyLexus's prototype ("lexus"), not what I want



for(prop of Object.keys(sportyLexus)){
    console.log(prop + ":" + sportyLexus[prop])
}








var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (var dairies of dairy) {
    console.log(dairies)
    }
}
logDairy();

const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (let attributes of Object.keys(bird)) {
        console.log(attributes + ': ' + bird[attributes]);
    }
}
birdCan();

function animalCan() {
    for (prop in bird) {
        console.log(prop + ': ' + bird[prop]);
    }
}
animalCan();