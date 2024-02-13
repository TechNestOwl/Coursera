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
];

//menu should display 
/*
    Dish: Key : value
    Dish: Key : value
    Dish: Key : value
    Dish: Key : value


    Code structure I will use:
    `Dish : ${dishData.}
*/

const tax = 1.20;


// my function needs to take in a boolean,
// If true, console.log menu items and prices WITH calcualted tax
// If false, do the same, but without tax calculation



function calculateMenuTax(menu){

    const tax = 1.2;
    // let message = ``;

    console.log("Prices with 20% tax:")

    for(let dish = 0; dish < menu.length; dish++){
            item = menu[dish];
        
            item.price = item.price * tax;


            let food = item.name;
            let price = item.price;

            console.log(`Dish : ${food} Price(incl.tax) : $${price}`);


            };
    };
    
function displayTaxFree(menu){

    // this function outputs the message in a an array of strings

    let output = [];

    console.log("Prices with tax free coupon:")

    for(let index = 0; index < menu.length; index++){
        let item = menu[index];

        let food = item.name;
        let price = item.price;

        let message = `Dish : ${food} Price : $${price}`;

        output.push(message)

    }

    console.log(output)

}    



function hasCoupon(bool){
    if(bool == true){
        // console.log(discountedFood)
        displayTaxFree(dishData)
    }else{
        calculateMenuTax(dishData)
    }
};


hasCoupon(false);
