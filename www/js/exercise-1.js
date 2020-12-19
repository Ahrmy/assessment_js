/**
 * #############################
 * ##  E J E R C I C I O   1  ##
 * #############################
 *
 * A partir del string dado crea un array en el que cada una de las distintas palabras
 * (palabras, no letras) del string sea una posición del array.
 *
 *  - No debe haber letras mayúsculas.
 *
 *  - El array no debe contener signos de puntuación, SOLO LETRAS.
 *
 *  - El array debe estar ordenado por orden alfabético.
 *
 * Resultado esperado: ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]
 *
 */

const text = 'Lorem Ipsum Dolor Sit Amet Consectetur, ¡Adipisicing Elit!.';

// reseteamos todo el string quitando comas exclamaciones y puntos y lo convierto en minúscula.
const textReset = text.replace(',', '').replace('!', '').replace('¡', '').replace('.', '').toLowerCase();
// console.log(textReset);

// convierto el string a array y lo ordeno.
let wordArray = [];
wordArray = textReset.split(' ');
wordArray.sort();

console.log(wordArray);
