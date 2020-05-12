class CarService {
    constructor(name, country) {
        this.name = name;
        this.country = country;

        this.carsToRepair = new Array();
    }

    addCar(car) {
        this.carsToRepair.push(car);
    }
}

module.exports = CarService;