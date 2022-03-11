/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

const firstElement = [1, 2, 3, 4, 5, 6, 7, 8];
const secondElement = [1, 2, 3, 4];

console.log(firstElement.length);
console.log(secondElement.length);

if (firstElement.length > secondElement.length) {

    do {
        secondElement.push(Math.floor(Math.random() * 10) + 1);
    } while (firstElement.length != secondElement.length);

} else if (firstElement.length < secondElement.length) {

    do {
        firstElement.push(Math.floor(Math.random() * 10) + 1);
    } while (firstElement.length != secondElement.length);

}

console.log(firstElement);
console.log(secondElement);

console.log(firstElement.length);
console.log(secondElement.length);