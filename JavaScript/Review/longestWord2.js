let names = [
    "Ant Man",
    "Dog Man2",
    "Superman",
    "Storm",
    "Frodo Baggins",
    "Jake"
];

//write a function that that takes in an araray an returns the longest item in array.

function findLongestName(arr){

    let longestName = "";

    for(let i = 0; i < arr.length; i++){
       if( arr[i].length > longestName.length){
        longestName = arr[i]
       }
    }
    return longestName;
}
