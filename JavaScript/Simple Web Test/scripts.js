
// CREACIÓN DE UNA CLASE
class Perro {

    constructor(nombre, color, edad, raza) {
        this.nombre = nombre;  
        this.color = color;
        this.edad = edad;
        this.raza = raza;
        this.estado = 'Sentado';
    }

    // Función tradicional
    olfatear () {
        this.estado = 'Olfateando';
    }
    
    // Función flecha
    ladrar = () => this.estado = 'Ladrando';

}

// SELECCIONAR HTML
let nombre = document.getElementById('nombre'); // Nombre
let color = document.getElementById('color');  // Color
let edad = document.getElementById('edad'); // Edad
let raza = document.getElementById('raza'); // Raza
let estado = document.querySelector('#estado span'); // Estado

// CREAR UN OBJETO (PERRO)
let perro_1 = new Perro('Canela', 'Arena', '1 año y medio', 'Maltés');

// ASIGNAR VALORES DESDE JS A HTML
nombre.innerHTML = perro_1.nombre;
color.innerHTML = perro_1.color;
edad.innerHTML = perro_1.edad;
raza.innerHTML = perro_1.raza;
estado.innerHTML = perro_1.estado;

// ACCEDER A MÉTODOS Y VARIABLES DEL OBJETO.
perro_1.olfatear();
estado.innerHTML = perro_1.estado;
