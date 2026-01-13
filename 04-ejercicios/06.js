/*
Crear un algoritmo que devuelva la cantidad de
numeros positivos de una array
*/

function cuantosPositivos(arry) {
  let cantidad = 0;

  for (numero of arry) {
    if (numero > 0) {
      cantidad++;
    }
  }
  console.log(cantidad);
}

cuantosPositivos([2, 5, 7, 15, -5, -100, 55]);
