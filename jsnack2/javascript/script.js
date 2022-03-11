/*Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.*/

// declared variable used to make the sum
let sumNumbers = 0;
for (let i = 0; i < 5; i++) {

    // declared variable used to ask a number
    let userNumber = parseInt(prompt("Inserisci un numero"));
    // while loop used to ask a number until the user give us a number 
    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Inserisci un numero"));
    }
    // sum of all our numbers
    sumNumbers += userNumber;

}
// console log of the sum of our numbers
console.log(sumNumbers);

/*
let sumNumbers = 0;

let i = 0
while (i < 5) {

    let userNumber = parseInt(prompt("Inserisci un numero"));
    while (isNaN(userNumber)) {
        userNumber = parseInt(prompt("Inserisci un numero"));
    }
    sumNumbers += userNumber;

    i++
}
console.log(sumNumbers);
*/