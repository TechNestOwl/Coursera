//regular function
function timesTwo(params) { return params * 2};

timesTwo(3); // 6




//arrow function
let timesThree = params => params * 3;

timesThree(3);// returns 9

//Variations

//Fat arrow functions have a variety of syntax's

// * if there one or less paramaters, you can place an empty () or none at all

// * Parentheses are only required for multiple paramaters. 

let multiply = (a,b) => a * b; // the return is implicit. 


// Statements as opposed to expressions.

// In it's most basic form:
// Function expressions  produce a VALUE
// Function statements produce an ACTION

// With arrow functions, statements need to have curly braces / {function body},
// once the braces are present, you need to have a return statement.

let  feedTheCat = (cat) => {
    if(cat === "hungry"){
        return "feed the cat";
    }else{
        return "Do not feed the cat";
    }
};

// If I am returning an object literal, it needs to be wrapped in parentheses.
// This forces the interpreter to evaluate what's inside the parentheses and the obj literal is returned.

x => ({ y:x });

// Annonynous funtions are not named.
// 1. Harder to debug
// 2. No self-referencing 


/* Important: 

    Classic function expressions, the 'this' keyword is bound to different values based on the context
    in which it was called. With arrow functions, 'this' is LEXICALLY bound. Meaning it ueses the 'this' 
    from the code that contains the arrow function. 
    ES6 arrow functions can't be bound to a 'this' keybword, so it will lexically go up a scope and use the 
    value of 'this' in the scope of which it was defined. 
*/

// Instances where NOT to use arrow functions

//1. Object Methods

//2. Callback functions

//3. When it makes my code less readable


//When to use?
//Arrow functions shine best with anything that requires this to be bound to the context,
// and not the function itself.
// like using them with methods such as map and reduce, because I think it makes my code more readable. 