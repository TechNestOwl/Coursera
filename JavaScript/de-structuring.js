//      De-structuring arrays and objects


// console.log(Math.PI);

let {PI} = Math;
console.log(PI)
/**
 In the code above, I am creating a new object called "PI". 

 *It is being destructuring('copied) from the Math.PI property.
Note: faulting spelling won't work. ie: pi .This would return undefinied because there
is no property named 'pi' in Math. 

I can alter the value of my new PI object because it is now seperate from Math.PI
*/
PI === Math.PI // returns true

PI = 1;

PI === Math.PI // now returns false







// Rest operator de-structuring syntax:

const [] = fruits; 

// specifying what I want to get out of the array, in this case the first 3 items
const [first,second,third,...otherFruits] = fruits; 
// creating 4 variables, 
// first 3 items I want
// and the 4th variable which will hold the remainder of the items from fruits. 
// otherFruits will be a subarray of the rest of the items: ['strawberry','pineapple','coconut']
