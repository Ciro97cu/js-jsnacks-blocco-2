/*Crea un array di numeri interi e fai la somma di tutti
gli elementi che sono in posizione dispari.*/

// array list of number
const numberList = [1, 2, 3, 4, 5, 6, 7, 20, 4, 33, 50];

// declared variable used to make the sum
let sumOddNumebrs = 0;
for (let i = 0; i < numberList.length; i++) {
    // condition to select only numbers in odd positions
    if (i % 2 !== 0) {
        sumOddNumebrs += numberList[i];
    }
}
// console log of the sum of our numbers in odd positions
console.log(sumOddNumebrs);