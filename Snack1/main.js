/*
Creare un array vuoto e chiedi all'utente un numero da inserire nell'array.
Continua a chiedere i numeri all'utente e a inserirli nell'array fino quando la somma degli elementi è minore di 50
*/



let somma = 0;
let array =[];

while(somma < 50){
    let number = parseInt(prompt("Inserisci un numero"));
    somma += number;
    array.push(number);
}

console.log(array);