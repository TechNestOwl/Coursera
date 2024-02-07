/**
  My focus here will be on working with the Object, Array,
  Map and Set data structures in JavaScript, through a series of examples.
 */



/*  Here are 3 specific methods that exist on arrays:

 * forEach()
 * filter()
 * map()
 */





// The forEach() method accepts a function that will work on each 
// item. That functins param is the current item itsel and (optional)the second param, its index

const fruits = ['mango','strawberry','jackfruit','apple'];

function appedIndex(fruit,index){
    console.log(`${fruit} : ${index}`)
};

// here I am itterating through fruit array and calling my function
fruits.forEach(appedIndex); 

// I can also pass the function directly in the forEach method as follows...

const cars = ["Toyota",'BMW','Maxda'];

cars.forEach((car,index) => {
    console.log(`${car}, ${index}`)
});





// .filter() method filters array based on a specific test. The array items that pass are returned

let nums = [1,18,20,80,100];

let twentyPlus = nums.filter((num) => num > 20); // return is implicit with my arrow function

// console.log(twentyPlus)

// Similar to forEach, filter method also accepts a function and that fucntion performs a test on each item in the array.





// .map() method is used to map each array item over to another array, based on whatever function is passed into the map method param.

nums.map((num) => num / 2 ); // returns array with each element from nums divided by 2



/**     NOTE TO SELF: 
    choosing a proper data structure affects the code that I can write. 
    This is because the data structure itself comes with some built-in 
    functionality that makes it easier to perform certain tasks or makes
    it harder or even impossible without converting my code to a proper 
    data structure.
 */




// Converting Object into Array

let result = [];

const car = {
    speed: 20,
    color: "mustard",
    topSpeed: 120,
};

const carKeys = Object.keys(car); // creating an itterable array of keys of car object
// console.log(carKeys)

carKeys.forEach((key) => {
    result.push(`${key} : ${car[key]}`) // for each key of carKeys, push this into result array
});

// console.log(result)



// Working with Maps 
// unlike Objects, Maps do not have inheritance, so no prototypes!,
// this makes it usefull as a data storage

// making a new Map with the map constructor - new Map()
let italianFood = new Map();

italianFood.set(1,"Spaghetti");
italianFood.set(2,"pizza")
italianFood.set(3,"tostinos")
italianFood.set(4,"lasagna")

console.log(italianFood);

// to get a specific value use the .get() methdod

let authentic = italianFood.get(3);

// console.log(authentic)



// Working with Sets

// a Set is a collection of unique values. Use constructor - new Set();
// the set constructor can accept an array for example.. here I am using it 
// 'filter' an array for unique items

let repetitiveFruits = ["apple", "mango",'apple','orange','apple','pineapple']

let uniqueFruits = new Set(repetitiveFruits) // returns only unique items from repetitiveFruits array
// console.log(uniqueFruits)