/**
 Javascript has a number of built-in object types.
 Match,Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, Json, etc..

 These objects are sometimes referred to as native objecgts.

 Some of these have constructor functions. ( Date ) Each new Date object instance should have a unique data by definition

 Other built in objegts like Math don't need a constructor, they're static objects whose properites and methods can be accessed directly. 
 */

 function IceCream(flavor){
    this.flavor = flavor;
    this.meltIt = function (){
        console.log(`The ${this.flavor} iceCream has melted.`)
    }
 };

let coconutIceCream =  new IceCream("Coconut"); // IceCream { flavor: 'Coconut', meltIt: [Function (anonymous)] }
let chocolateIceCream = new IceCream("Chocolate");


