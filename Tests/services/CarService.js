function forEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        callbackFunction(element);
    }
}

class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;

        this.carsToRepair = new Array();
    }

    addCar(car) {
        this.carsToRepair.push(car);
    }

    displayCustomName() {
        console.log('I am custom name function');
    }

    displayAllCars() {

        forEach(this.carsToRepair, (car) => {
            this.displayCustomName();
            car.displayCarInformations();
        });
        // this.carsToRepair.forEach(function(car) {
        //     car.displayCarInformations();
        // });
    }
}

module.exports = CarService;