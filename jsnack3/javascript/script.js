/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

// created two arrays
const firstElement = [1, 2, 3, 4, 5, 6, 7, 8];
const secondElement = [1, 2, 3, 4];

// I check the length of the two arrays
console.log(firstElement.length);
console.log(secondElement.length);

/* if the length of the first array is greater than the second array
we enter this condition; otherwise in the other condition */
if (firstElement.length > secondElement.length) {
    /* do-while loop until the array's length
    doesn't match the length of the other one */
    do {
        secondElement.push(Math.floor(Math.random() * 10) + 1);
    } while (firstElement.length != secondElement.length);

} else if (firstElement.length < secondElement.length) {
    /* do-while loop until the array's length
    doesn't match the length of the other one */
    do {
        firstElement.push(Math.floor(Math.random() * 10) + 1);
    } while (firstElement.length != secondElement.length);

}

// final check of the contents of the two arrays
console.log(firstElement);
console.log(secondElement);