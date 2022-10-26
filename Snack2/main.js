/*
il software deve chiedere per 5 volte all'utente di inserire un numero.
il programma stampa la somma di tutti i numeri inseriti
*/

//variable for counting
let x = 0;
//variable for sum
let sum = 0;

while(x<5){
    //ask the number
    let number = parseInt(prompt("Inserire un numero"));
    //do the math
    sum += number;
    //increment the variable
    x++;
}


//print the result
console.log("La somma dei numeri inseriti è: " , sum);
