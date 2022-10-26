/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
Interrompi il ciclo appena il nome è stato trovato.
*/


//list guest
const guest = ["andrea" , "marco" , "matteo" , "sofia", "alessandro", "Elsti"]


//ask the name of the guest
let nameGuest = prompt("Inserisci il tuo nome: ");

//variable
let i=0;

while(true){
    //check if the name is into the guest's list
    if(nameGuest == guest[i]){
        console.log("prego può entrare");
        break;
    //if you finished the list you're not allowed to enter
    }else if(i = (guest.length - 1)){
        console.log("il suo nome non è sulla lista");
        break;
    }
    i++;
}


