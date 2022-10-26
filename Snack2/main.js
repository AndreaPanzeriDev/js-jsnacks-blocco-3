/*
il software deve chiedere per 5 volte all'utente di inserire un numero.
il programma stampa la somma di tutti i numeri inseriti
*/

let x = 0;

let sum = 0;

while(x<5){

    let number = parseInt(prompt("Inserire un numero"));
    sum += number;
    x++;
}

console.log("La somma dei numeri inseriti è: " , sum);
