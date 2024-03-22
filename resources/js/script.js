/*

TODO esercizio di oggi: Snack Array Methods
TODO repo: js-snack-es6
 TODO SNACK 1
 TODO Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
 TODO Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
 TODO [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
 TODO Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
 TODO nome del tavolo (tableName),
 TODO nome dell'ospite (guestName),
 TODO posto occupato (place),
 TODO Generiamo e stampiamo in console la lista per i segnaposto.
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Buon pomeriggio e buon lavoro !!! :faccia_nerd:
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84
Buon lavoro e Buon weekeend ! :muscolo:
*/

//input
//buttons
let generateGuestInfo = document.getElementById("generate-guest-info");
let cancelButton = document.getElementById("cancel-button");
let addElementsButton = document.getElementById("add-elements-button")
//output
let response = document.getElementById("response");
let arrayInvitati = document.querySelector(".first-array h4")
let arraySpecifFormat = document.querySelector(".second-array h4")
//variables


let listaInvitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];
arrayInvitati.innerHTML = listaInvitati.join(", ")


generateGuestInfo.addEventListener('click', () => generateGuest())
function generateGuest() {
    let newListGuest = listaInvitati.map((element, index) => {
        const Guest = {
            tableName: "Tavolo Vip",
            guestName: element,
            place: index + 1
        };
        return Guest
    })
    console.log(newListGuest);

    let formattedString = '<pre>' + JSON.stringify(newListGuest, null, 2) + '</pre>';
    arraySpecifFormat.innerHTML = formattedString;
}


cancelButton.addEventListener('click', () => {
    arraySpecifFormat.innerHTML = "";
})

