/* Imprimir los numeros impares del 1 al 10*/

function numerosImpares() {
  for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
      console.log("Impar: ", i);
    }
  }
}

let resultado = numerosImpares()