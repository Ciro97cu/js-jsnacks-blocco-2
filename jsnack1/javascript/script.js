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


/* alternative with an increment of the variable "i" by 2 and starting from 1,
in order to remove the if condition inside the loop for

// array list of number
const numberList = [1, 2, 3, 4, 5, 6, 7];

// declared variable used to make the sum
let sumOddNumebrs = 0;
for (let i = 1; i < numberList.length; i += 2) {

    sumOddNumebrs += numberList[i];

}
// console log of the sum of our numbers in odd positions
console.log(sumOddNumebrs);
*/