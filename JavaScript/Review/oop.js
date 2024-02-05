/**
 Object Orientated Programming revolves around the idea of of orgainzing my program around
 objects and grouping relevant data and functions(methods).

 This in contrast to functional programming where data is kept seperate from functions that operate
 on that data. 

*/

//      Functional Programming:
let shoes = 100;
let stateTax = 1.06;

function totalPrice(item,tax){
    return item * tax;
}

let toPay = totalPrice(shoes,stateTax);
console.log(toPay);





//      Object Orientated Programming
let shoePurchase = {
    price: 100,
    stateTax: 1.07,
    totalPrice: function(){
        let calculation = this.price * this.stateTax;
        // return `Total Price is ${calculation}`;
        console.log('Total Price:', calculation);
    }
};

shoePurchase.totalPrice();