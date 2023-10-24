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

dog.feed(dog.hungry);
