/* Crear un algoritmo que devuelva el numero menor
y mayor de un  array y lo devuelva
en un array tabien*/

function getMenorMayor(arry) {
  let i = 0;
  let menor = arry[0];
  let mayor = arry[0];

  while (i < arry.length) {
    if (arry[i] < menor) {
      menor = arry[i];
    } else if (arry[i] > mayor) {
      mayor = arry[i];
    }
    i++;
  }
  return [menor, mayor];
}

let resultado = getMenorMayor([-10, -2, 12, 30, 4, 5, 100, -11]);
console.log(resultado);
