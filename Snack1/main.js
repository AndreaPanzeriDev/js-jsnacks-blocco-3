/*
Creare un array vuoto e chiedi all'utente un numero da inserire nell'array.
Continua a chiedere i numeri all'utente e a inserirli nell'array fino quando la somma degli elementi è minore di 50
*/


//variable sum
let somma = 0;

//create an empty array
let array = [];


//check untill the sum lower than 50
while(somma < 50){
    //ask the number
    let number = parseInt(prompt("Inserisci un numero"));
    //add the number in a sum
    somma += number;
    //add the value in the array
    array.push(number);
}

//print the array
console.log(array);
//print the sum
console.log("la somma è: ", somma);
