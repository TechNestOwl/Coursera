class Spa {
    constructor(sauna, jacuzzi, coldPlunge){
        this.sauna = sauna;
        this.jacuzzi = jacuzzi;
        this. coldPlunge = coldPlunge;
    }
    turnOnSauna(){
        if(this.sauna == true){
        console.log("Sauna has been turned on");
        }else{
            console.log("spa does not have that equipment")
        }
    };
    turnOnJacuzzi(){
        if(this.jacuzzi == true){
        console.log("Jacuzzi has been turned on");
        }else{
            console.log("spa is not equiped with Jaccuzi")
        }
    };
    turnOnColdPllunge(){
        if(this.coldPlunge == true){
        console.log("Cold plung has been turned on");
        }else{
            console.log("spa is not equiped with a cold plung")
        }
    };

};



class HomeSpa extends Spa{
    turnOnJacuzzi(){
        super.turnOnJacuzzi();
        console.log("PH levels are in balance")
    }
};

class PublicSpa extends Spa{
    turnOnJacuzzi(){
        super.turnOnJacuzzi();
        console.log("Water level should be check as well as PH balance.")
    }
};


let mySpa = new HomeSpa(true, false, true);
let gymSpa = new PublicSpa(true, true, true);

console.log(mySpa);
console.log(gymSpa);

gymSpa.turnOnJacuzzi();

// mySpa.turnOnJacuzzi()