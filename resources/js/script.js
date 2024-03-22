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

*/

//input
//buttons
let generateGuestInfo = document.getElementById("generate-guest-info");
let cancelButton = document.getElementById("cancel-button");
//output
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



/*
TODO SNACK 2
TODO Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
TODO 1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
TODO ES (Marco della Rovere => MARCO DELLA ROVERE);
TODO 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
TODO 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
TODO Buon pomeriggio e buon lavoro !!! :faccia_nerd:
TODO Questo è l'elenco degli studenti:
TODO Id  Name                Grades
TODO 213 Marco della Rovere      78
TODO 110 Paola Cortellessa       96
TODO 250 Andrea Mantegna         48
TODO 145 Gaia Borromini          74
TODO 196 Luigi Grimaldello       68
TODO 102 Piero della Francesca   50
TODO 120 Francesca da Polenta    84
*/


//input
//buttons
let generateList = document.getElementById("generate-sudent-list");
let cancelButton2 = document.getElementById("cancel-button-2");
//output
let arrayStudent = document.getElementById("array-student")
let arrayStudentName = document.getElementById("array-student-name")
let arrayStudentGrades = document.getElementById("array-student-grades")
//variables

let students = [
    {
        Id: 213,
        Name: "Marco della Rovere",
        Grades: 78
    },
    {
        Id: 110,
        Name: "Paola Cortellessa",
        Grades: 96
    },
    {
        Id: 250,
        Name: "Andrea Mantegna",
        Grades: 48
    },
    {
        Id: 145,
        Name: "Gaia Borromini",
        Grades: 74
    },
    {
        Id: 196,
        Name: "Luigi Grimaldello",
        Grades: 68
    },
    {
        Id: 102,
        Name: "Piero della Francesca",
        Grades: 50
    },
    {
        Id: 120,
        Name: "Francesca da Polenta",
        Grades: 84
    }
]

let formattedStudent = '<pre>' + JSON.stringify(students, null, 2) + '</pre>';
arrayStudent.innerHTML = formattedStudent;

let studentName = students.map(element => {
    return element = `<li>${element.Name.toUpperCase()}</li>`
})
arrayStudentName.innerHTML = `<ul>
${studentName.join('')}
</ul>`


let studentWith70 = students.filter(element => {
    return element.Grades > 70;
}).map(element => element = `<li>${element.Name.toUpperCase()}</li>`)

arrayStudentGrades.innerHTML = `<ul>
${studentWith70.join('')}
</ul>`

let studentWith70andId120 = students.map()