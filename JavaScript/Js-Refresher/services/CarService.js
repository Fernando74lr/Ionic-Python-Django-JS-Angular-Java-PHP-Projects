const Promise = require('../Promise.js');
const Observable = require('../Observable.js');

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
        // Ternary Operator
        car.brand === 'toyota' ? console.log('I can not to add toyota!!!!') : this.carsToRepair.push(car);
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

    getAllCars = () => this.carsToRepair;

    getSecretsDocuments() {
        // return new Promise((resolve, reject) => {
        //     setTimeout(function() {
        //         let secretDocs = 'Super secret Docs, do not share.';
        //         reject(secretDocs);
        //     }, 2000);
        // });

        // Observable

        return new Observable((observer) => {
            setTimeout(function() {
                let secretDocs = 'Super secret Docs, do not share.';
                observer.next(secretDocs);
                observer.next('secretDocs1');
                observer.complete('Operation succeded');
                observer.next('secretDocs2');
                observer.next('secretDocs3');
            }, 2000);
        });
    }
}

module.exports = CarService;