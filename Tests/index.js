// Classes and debugging

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCarInformations() {
        console.log(this.brand + ', ' + this.model + ': ' + this.year);
    }
}

const car1 = new Car('ford', 'focus', 2015);
const car2 = new Car('ford', 'fiesta', 2000);


car1.displayCarInformations();