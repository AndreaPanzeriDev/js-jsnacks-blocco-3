/*
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
Interrompi il ciclo appena il nome è stato trovato.
*/



const guest = ["andrea" , "marco" , "matteo" , "sofia", "alessandro", "Elsti"]

let nameGuest = prompt("Inserisci il tuo nome: ");

let i=0;

while(true){

    if(nameGuest == guest[i]){
        console.log("prego può entrare");
        break;
    }else if(i = (guest.length - 1)){
        console.log("il suo nome non è sulla lista");
        break;
    }
    i++;
}


