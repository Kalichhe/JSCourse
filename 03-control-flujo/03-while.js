// Imprimir los numeros pares que estan entre el 0 y el 10
let i = 0;

while (i < 10) {
  if (i % 2 === 0) {
    if (i !== 0) {
      console.log("Numero par: ", i);
    }
  }
  i++;
}
