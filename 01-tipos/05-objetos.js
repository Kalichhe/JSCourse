// Caracteristicas de un personaje de anime

// Goku

let nombreTierra = "Goku";
let nombre = "Kakaroto";
let raza = "Saiyajin";
let planetaDeOrigen = "Vegeta";
let edad = 38;

let personaje = {
  nombreTierra: "Goku",
  nombre: "Kakaroto",
  raza: "Saiyajin",
  planetaDeOrigen: "Vegeta",
  edad: 38,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["planetaDeOrigen"]);

// Para modificar un atributo del objeto se hace asi

personaje.edad = 12;

console.log(personaje.edad);

// Para eliminar una propiedad del objeto se hace asi

delete personaje.nombre;

console.log(personaje);
