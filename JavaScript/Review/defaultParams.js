/*
    Setting a default parameter in a function is useful forhaving a function
    work properly even when all the params are not met. 
 */


// without default Parameters
function noDefaultParms(number){
    return number * number
};

console.log(noDefaultParms(5)) // 25
console.log(noDefaultParms());// NaN
// the line above does not throw an error,
// instead, it returns a non-sensical output. 





// with default Parameters
function withDefaultParams(number = 5){
    return number * number
};

console.log(withDefaultParams()); // 25
console.log(withDefaultParams(10))// 100 I can still pass in custome params to override the dedualt


class NoDefaultParams{
    constructor(num1,num2, string1, bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2);
            return;
        }
        console.log( "The value of bool1 is incorrect")
        return;
    }
};

let fail = new NoDefaultParams(2,4,true);// 

fail.calculate();

class WithDefaultParams{
    constructor(num1 = 2 ,num2 = 4 , string1 = "Result: ", bool1 = true){
        this.num1 = num1;
        this.num2 = num2;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2);
            return;
        }
        console.log( "The value of bool1 is incorrect")
        return;
    }
};

let pass = new WithDefaultParams();

pass.calculate();