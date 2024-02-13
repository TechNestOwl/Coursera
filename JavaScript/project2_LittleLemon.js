const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let index = 0; index < dishData.length; index++) {
        const foodObj = dishData[index];

        var finalPrice;

        if (taxBoolean == true) {
            finalPrice = foodObj.price * 1.2;

        }else if(taxBoolean == false){
            finalPrice = foodObj.price;
        } else {
            console.log("You need to pass a boolean to the getPrice call!");
            return
        };
        console.log(`Dish: ${foodObj.name} Price: $${finalPrice}`);        
    }
};

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);

    if (guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
             discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }

        console.log(`Discount is: $${discount}`)
    }else{
        console.log("The second argument must be between 0 and 30");
    }
};

// Call getDiscount()

getDiscount(false, 23);


