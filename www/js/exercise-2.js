/**
 * #############################
 * ##  E J E R C I C I O   2  ##
 * #############################
 *
 * La constante data simula el contenido de un fichero ".csv". Podemos imaginar
 * que se trata de una tabla con filas y columnas. La primera fila de este tipo
 * de ficheros indica el nombre de cada columna.
 *
 * Por ejemplo, la primera columna se llama "id". Como podéis ver cada fila
 * tiene un "id" distinto: 142, 143, 144, etc. Lo mismo pasa para las demás
 * columnas. Por tanto, podemos entender que cada fila es una entidad de la
 * tabla, en este caso un piso.
 *
 * El objetivo de este ejercicio es convertir la información almacenada en data
 * en un array en el que cada posición sea un piso. El resultado final debería
 * ser algo similar a:
 *
 *    [
 *      ["142", "88", "12", "3", "1", "true", "false"],
 *      ["143", "120", "10", "4", "2", "false", "false"],
 *      ["144", "46", "18", "1", "1", "true", "true"],
 *      ["145", "52", "8", "1", "1", "true", "true"],
 *      ["146", "60", "3", "1", "1", "true", "true"],
 *      ["147", "140", "4", "4", "2", "true", "true"],
 *      ["148", "160", "9", "5", "3", "true", "true"],
 *      ["149", "60", "11", "1", "1", "false", "true"]
 *    ]
 *
 * Tips:
 *
 *  - El método "nombreString.trim()" elimina los espacios en blanco al principio
 *    y al final del array. No elimina los espacios que haya de por medio.
 *
 *    '    ¡Hola ola caracola!    '.trim() ---> '¡Hola ola caracola'
 *
 *  - Si queremos dividir un string donde haya un salto de línea podemos utilizar
 *    "nombreString.split('\n')".
 *
 */

'use strict';

let data = `  "id", "m2", "antiguedad", "habitaciones", "baños", "amueblado", "ascensor"
142, 88, 12, 3, 1, true,  false
143, 120, 10,  4, 2, false,  false
144, 46, 18,  1, 1, true,  true
145, 52, 8,  1, 1, true,  true
146, 60, 3,  1, 1, true,   true
147, 140, 4,  4, 2, true,   true
148, 160, 9,  5, 3, true,  true
149, 60, 11,  1, 1, false,  true
   `;

//************** TOODO LO COMENTADO, SON CAMINOS QUE NO LLEGARÓN A BUEN PUERTO JIJIJIJIJIJ */

const dataArray = data.trim().split('\n');
// console.log(dataArray);

// const dataArrayFinal = [];
// for (let i = 0; i < dataArray.length; i++) {
//   dataArrayFinal.push(dataArray[i].split(', '));
//   //   console.log(dataArray[i]);
// }

const dataArrayFinal = [];
dataArray.map((value) => {
  const tempArray = value.split(',');
  //   console.log(tempArray);
  const tempArray2 = [];
  for (const dato of tempArray) {
    //  console.log(dato);
    tempArray2.push(dato.trim().replace('"', '').replace('"', ''));
  }
  dataArrayFinal.push(tempArray2);
});

// const dataArrayNoSpace = [];
// for (let i = 0; i < dataArray.length; i++) {
//    const dataArrayFinal =[... ]
//   function data() {
//      for (const dato of dataArray[i]) {
//        dataArrayFinal.push(dato.trim());
//      } return dataArrayFinal
//   }
// }

// const dataArrayNoSpace = dataArrayFinal.map((value) => {
//   for (const dato of dataArrayFinal[value]) {
//     return dato.trim();
//   }
// });

// for (const value of dataArrayFinal[1]) {
//   dataArrayFinal[1].push(value.trim());
//   //   console.log(value);
// }

// const dataArrayFinal2 = [];
// for (let i = 0; i < dataArray.length; i++) {
//   const dataArrayRow = dataArray[i]..split(',');
//   dataArrayFinal2.push(dataArrayRow);
// }

console.log(dataArrayFinal);
