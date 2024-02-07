//          ** Spread Operator **

// the spread operator is used to spread array items and join objects together.

let cities = ['Rio','New York','Kissime'];

function listCities(city1,city2,city3){
    console.log(city1);
    console.log(city2);
    console.log(city3);
}; // this function takes in 3 params, of which are all in my array. 

// I could target each individual element in my array with it's index like this
// listCities(cities[0],cities[1],cities[2]); 
// but this is inefficient and would even be worse with more params


// here I use the spread operator to concisely pass each array element,
// instead of targeting each array[index] 
// listCities(...cities);

// the spread operator essentially unpacks each element from a given array






//          ** Rest Operator **

// The rest operator deconstructs a given array and appends the 
//remaing(unreferenced) elements in a new sub array.

let fruits = [
    'apple',
    'orange',
    'pear',
    'strawberry',
    'pineapple',
    'coconut'
];

// de-structuring syntax:

const [] = fruits; 

// specifying what I want to get out of the array, in this case the first 3 items
const [first,second,third,...otherFruits] = fruits; 
// creating 4 variables, 
// first 3 items I want
// and the 4th variable which will hold the remainder of the items from fruits. 
// otherFruits will be a subarray of the rest of the items: ['strawberry','pineapple','coconut']


// * The rest operator, gives me what is leftover of the source array, as a seperate array. 

//Rest operator in functions:


function addTaxToPrices(taxRate, ...itemsBought){ // the rest operator is giving me an array which I can now use an array method on .map()
    return itemsBought.map(item => taxRate * item)
};
//important note: the rest operator must be the last param in the function definition

let shoppingCart = addTaxToPrices(tax, 80,200,100);

console.log(shoppingCart)