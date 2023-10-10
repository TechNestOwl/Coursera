/*         --- Learning objectives:

- Build and use objects, arrays, functions.
- Handling bugs and errors using try, catch, throw and defensive programming

*/
// D.R.Y. - Don't repeat yourself


//simple function:
// function addNum(a,b){
//     c = a + b;
//     console.log(c);
// }
// addNum(2,4); // function invocation 'call'

//          --- Looping Through an Array ---
let arr = ["Eat","Sleep","Code","Repeat"];

function listArrayItems(){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
listArrayItems(arr);