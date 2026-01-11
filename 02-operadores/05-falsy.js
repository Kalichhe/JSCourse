// short-circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = "Carlos";
let username = nombre || "User";
console.log(username);

function funcion1() {
  console.log("Soy funcion 1");
  return false;
}

function funcion2() {
  console.log("Soy funcion 2");
  return true;
}

let x = funcion1() && funcion2();
