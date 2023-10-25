//Functions inside an object are refered to as METHODS

let dog = {
    breed: "Border-collie",
    weight: 60,
    hungry: true,
};

dog.feed = (a) => {
    if(a == true){
        console.log("feed dog");
        // return "dog needs to be fed.";
    }else{
        console.log("Don't feed dog");
        // return "dog does not need feeding."
    };
};

// dog.feed(dog.hungry);


//Function that calcualtes total cost of buying a pair of shoes (+tax)

let shoePurchase = {
    cost: 20,
    tax: 1.06,
    totalPrice: (a,b) => { // DO NOT use arrow functions as methods. !!!!
        console.log(a * b)
        // return a * b;
    },
};
// shoePurchase.totalPrice(shoePurchase.cost,shoePurchase.tax); // passing the arguments this way seems cumbersome. Let's refactor.

let shoePurchase2 = {
    cost: 100,
    tax: 1.06,
    totalPrice: function(){
        let calculation = this.cost * this.tax;
        console.log("Total sale price is:", calculation)
    }
};
shoePurchase2.totalPrice(); // accessing the totalPrice method using dot notation



