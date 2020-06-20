const Car = require('./Car');

class FancyCar extends Car {
    constructor(brand, model, year) { // could be: constructor(...rest)
        super(brand, model, year); // could be super(...rest)
        this.priority = 'HIGH PRIORITY';
    }

    getStatus() {
        console.log('2 hours to finish repair');
    }

    displayCarInformations() {
        console.log('I am super fancy car');
        super.displayCarInformations(); // calls the function of the parent class, not this one.
    }
}

module.exports = FancyCar;