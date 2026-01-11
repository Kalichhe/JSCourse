// Saber cual de los dos numeros es mayor

function cualEsMayor(numero1, numero2) {
  console.log("Primer numero: ", numero1);
  console.log("Segundo numero: ", numero2);

  if (numero1 > numero2) {
    console.log("El numero mayor es el primer numero: ", numero1);
  } else if (numero2 > numero1) {
    console.log("El numero mayor es el Segundo numero: ", numero2);
  } else {
    console.log("Los numeros son iguales");
  }
}

let mayor = cualEsMayor(2, 1);
mayor;
