// eliminar espacio en blanco

const cadena1 = "      hola"

console.log(cadena1.length);

const cadena2 = cadena1.trim()

console.log(cadena2.length);

// flat

const arreglo1 = [1 ,2 ,3, 4, ,5 , [6,7,8], 9 ,[[11,12]]]

console.log(arreglo1.flat(2))

