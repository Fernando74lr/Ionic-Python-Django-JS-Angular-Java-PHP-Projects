const Car = require('./Car.js');
const CarService = require('./services/CarService.js');

const carService = new CarService('SuperCars', 'Spain, Malaga');
const car1 = new Car();
const car2 = new Car('ford', 'fiesta', 2000);

carService.addCar(car1);
carService.addCar(car2);

//carService.displayAllCars();

function getName(name) {
    return name;
}

/* Arrow functions transformations */

// const getName2 = () => {
//  return 'David';
// }

// const getName2 = () => 'David';

const getName2 = name => name;

console.log(getName('Filip'));
console.log(getName2('David'));