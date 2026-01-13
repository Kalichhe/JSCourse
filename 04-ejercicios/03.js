/*
Indice validar que no sea menor a cero y que el elemento exista en el array
*/

function getByIdx(arry, idx) {
  if (idx < 0) {
    console.log("El indice debe de ser mayor a cero");
  } else if (arry[idx] === undefined) {
    console.log("El elemento no existe en el array o indice no valido");
  } else {
    console.log(arry[idx]);
  }
}

let resultado = getByIdx([1, 2], 9);
