/*
Fai inserire un numero, che chiameremo N, all'utente
genera N array
ognuno formato da 10 numeri casuali tra 1 e 100
ogni volta che ne crei uno stampalo
*/


let N = parseInt(prompt("Inserisci quanti array vuoi creare"));

let x = 0;

while(x < N){
    //create a new array every single loop
    var array = new Array();
    let i = 0;

    //Insert 10 element in the new array
    while(i<10){
        //push a random number beetween 0 and 100
        array.push(Math.round(Math.random() * 100 ));
        //increment the variable to cicle 10 times
        i++;
    }

    //print the array
    console.log(array);
    //increment the variable to cicle again
    x++;
}