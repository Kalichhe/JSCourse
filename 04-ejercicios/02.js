function nombreResolucion(ancho, alto) {
  if (ancho >= 7680 && alto >= 4320) {
    console.log("La resolucion es: 8K");
  } else if (ancho >= 3840 && alto >= 2160) {
    console.log("La resolucion es: 4K");
  } else if (ancho >= 2560 && alto >= 1440) {
    console.log("La resolucion es: WQHD");
  } else if (ancho >= 1920 && alto >= 1080) {
    console.log("La resolucion es: FHD");
  } else if (ancho >= 1280 && alto >= 720) {
    console.log("La resolucion es: HD");
  } else {
    console.log("La resolucion no se encuentra 👍");
  }
}

let nombre = nombreResolucion(3840, 2160);
