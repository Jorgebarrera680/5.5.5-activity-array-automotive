//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


class car extends VehicleModule{
    constructor(Make,vehicleType, year, color, milage){
        this.make = make;
        this.vehicleType = vehicleType;
        this.year = year;
        this.color = color;
        this.milage = milage;

        this.numberOfPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;


    }
}

    loadPassenger(num); {
        if (this.numberOfPassengers < this.passenger) {
            console.log("Room available");

        
        } else{
            console.log(this.year + " "+ this.model + "room not available");
        }

    }


    start();{
    if (this.fuel === 0){
        console.log("engine started");
    }
    else{
        console.log("no fuel");
    }
    

    }

    maintnace();{
        if(this.milage > 3000){
            console.log("maintnace required");
        } else{
            console.log("not time for maintnace")
        }
    }

    
