const Car = require('./Car.js');
const CarService = require('./services/CarService.js');

const carService = new CarService('SuperCars', 'Spain, Malaga');

const car1 = new Car();
const car2 = new Car('ford', 'fiesta', 2000);
const car3 = new Car('fiat', 'punto', 2011);
const car4 = new Car('toyota', 'yaris', 2003);


carService.addCar(car1);
carService.addCar(car2);
carService.addCar(car3);
carService.addCar(car4);

/* Destructuring
    [...rest] = carService.getAllCars();

    const allCars = carService.getAllCars();
    // console.log(allCars); // Array [Car, Car, Car, Car]
    // console.log(...allCars); // Car {brand: "Default brand", model: "Default Model", year: 2000} Display all.

    const newArray = [];

    newArray.push(...allCars);

    const {brand, model, year} = car1; // Instead of "const carBrand = car1.brand; const carModel = car1.model; ..."
*/

/* Arrow functions transformations 
    const getName2 = name => name;
*/