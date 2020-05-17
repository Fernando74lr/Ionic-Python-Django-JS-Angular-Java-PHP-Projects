class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;

        this.carsToRepair = new Array();
    }

    addCar(car) {
        this.carsToRepair.push(car);
    }

    displayAllCars() {
        this.carsToRepair.forEach(function(car) {
            car.displayCarInformations();
        });
    }
}

module.exports = CarService;