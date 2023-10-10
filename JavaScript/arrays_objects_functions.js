/*         --- Learning objectives:

- Build and use objects, arrays, functions.
- Handling bugs and errors using try, catch, throw and defensive programming

*/
// D.R.Y. - Don't repeat yourself


//      Simple function:
// function addNum(a,b){
//     c = a + b;
//     console.log(c);
// }
// addNum(2,4); // function invocation 'call'



//          --- Looping and Iterating With Functions  ---


// let arr = ["Eat","Sleep","Code","Repeat"];
// function listArrayItems(){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == "Sleep"){
//             console.log(i, "Set alarm for 6:00am,", arr[i])
//         }else{
//             console.log(i + 1, arr[i]); //displaying the array item where the index is equal to 'i'
//         }
//     }
// }
// listArrayItems(arr);


// function letterFinder(word,match){
//     for(let i = 0; i < word.length; i++){
//         if(word[i] == match){
//             console.log("Found the", match, "at", i);
//         }else {
//             console.log("No match found at", i)
//         }
//     }
// }
// letterFinder("test","t");




//          --- Objects and Dot Notation ---

//creating videogame characters with two different methods
let mainCharacter = {}; //creating an empty object

mainCharacter.health = 100; // adding key: values, retroactively 
mainCharacter.attack = 20;
mainCharacter.defense = 50;
mainCharacter.gold = 500;

let goblinCharacter = {
    health: 100,
    attack: 15,
    defense: 20,
    gold: 100
}; 

// console.log("Hero -", mainCharacter);
// console.log("Hero's health:", mainCharacter.health);

let charactersHouse = {
    value: 15000,
    location: "City-center",
    material: ["wood","stone","brick"]
}
console.log("Hero's house is made mostly of:",charactersHouse.material[1]);
charactersHouse.windows = 4;
console.log(charactersHouse);