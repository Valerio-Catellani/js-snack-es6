
const App = document.getElementById("app")

function start() {
    const Title = document.createElement('h1');
    Title.className = "text-center text-warning display-1 fw-bold mt-3"
    Title.style = "-webkit-text-stroke: 1px white;"
    Title.innerHTML = "Jsnack es 6"

    const UserBar = document.createElement('div');
    UserBar.className = "container d-flex justify-content-between align-items-center align-content-center bg-light-subtle mb-5 mt-2 py-4 border border-5 border-warning-subtle rounded-3";
    UserBar.append(createButton("jsnack-1", "Festa D.Johnson", snack1), createButton("jsnack-2", "Lista Studenti", snack2), createButton("jsnack-3", "Bici da Corsa", snack3), createButton("jsnack-4", "Campionato", snack4))
    function createButton(classButton, content, functionOnClick) {
        const Button = document.createElement('button');
        Button.id = `${classButton}`
        Button.className = 'btn btn-lg btn-warning align-self-center border border-dark shadow';
        Button.type = "button";
        Button.innerHTML = `${content}`
        Button.addEventListener('click', () => functionOnClick())
        return Button;
    }
    App.append(Title, UserBar)
};
start()

function reset() {
    document.getElementById("jsnack") ? document.getElementById("jsnack").remove() : "";
}

/* JSNAK 1 - FESTA

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
function snack1() {
    reset()
    const snack = document.createElement('div');
    snack.id = "jsnack"
    snack.className = 'container my-5 d-flex flex-column p-4 bg-light border border-5 border-warning-subtle rounded-3';
    tmpl = `
    <h2 class="text-center mb-3 display-4 fw-bold text-secondary" style="-webkit-text-stroke: 1px black;">Festa Dwayne Johnson</h2>
    <h3>Lista Invitati</h3>
    <div class="first-array bg-warning bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 class="mb-0"></h4>
    </div>
    <h3>Dati per la Stamperia</h3>
    <div class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 class="mb-0"></h4>
    </div>
    <div id="array-creation">
      <div class="buttons d-flex gap-5 justify-content-center ">
        <button id="generate-guest-info" type="button" class="btn btn-lg btn-success align-self-center border border-dark shadow">Genera il
          formato dati per la stamperia</button>
        <button id="cancel-button" type="button" class="btn btn-lg btn-danger align-self-center border border-dark shadow">Cancella</button>
      </div>
    </div>
    `;
    snack.innerHTML = tmpl;
    App.append(snack);

    //buttons
    const generateGuestInfo = document.getElementById("generate-guest-info");
    const cancelButton = document.getElementById("cancel-button");
    //output
    const arrayInvitati = document.querySelector(".first-array h4")
    const arraySpecifFormat = document.querySelector(".second-array h4")

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
}


/* JSNACK 2 - LISTA STUDENTI
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
function snack2() {
    reset()
    const snack = document.createElement('div');
    snack.id = "jsnack"
    snack.className = 'container my-5 d-flex flex-column p-4 bg-light border border-5 border-warning-subtle rounded-3';
    tmpl = `
    <h2 class="text-center mb-3 display-4 fw-bold text-secondary" style="-webkit-text-stroke: 1px black;">Lista Studenti
    </h2>
    <h3>Elenco degli studenti</h3>
    <div class="first-array bg-warning bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 id="array-student" class=" mb-0"></h4>
    </div>
    <h3>Targe Nomi Studenti</h3>
    <div class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 id="array-student-name" class="mb-0"></h4>
    </div>
    <h3>Studenti con voti superiori a 70</h3>
    <div class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 id="array-student-grades" class="mb-0"></h4>
    </div>
    <h3>Studenti con voti superiori a 70 e id superiore a 120</h3>
    <div class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow" style="max-height:500px">
      <h4 id="array-student-grades-and-id" class="mb-0"></h4>
    </div>
    <div id="array-creation">
      <div class="buttons d-flex gap-5 justify-content-center ">
        <button id="generate-sudent-list" type="button"
          class="btn btn-lg  btn-success align-self-center border border-dark shadow">Ricerca
          Studenti</button>
        <button id="cancel-button-2" type="button"
          class="btn btn-lg btn-danger align-self-center border border-dark shadow">Cancella</button>
      </div>
    </div>
    `;
    snack.innerHTML = tmpl;
    App.append(snack);
    //input
    //buttons
    let generateList = document.getElementById("generate-sudent-list");
    let cancelButton2 = document.getElementById("cancel-button-2");
    //output
    let arrayStudent = document.getElementById("array-student")
    let arrayStudentName = document.getElementById("array-student-name")
    let arrayStudentGrades = document.getElementById("array-student-grades")
    let arrayStudentGradesANDId = document.getElementById("array-student-grades-and-id")

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


    generateList.addEventListener('click', () => generateStudents())

    function generateStudents() {
        let studentName = students.map(element => {
            return element = `<li>${element.Name.toUpperCase()}</li>`
        })
        arrayStudentName.innerHTML = `<ul class="mb-0">
        ${studentName.join('')}
        </ul>`

        let studentWith70 = students.filter(element => {
            return element.Grades > 70;
        }).map(element => element = `<li>${element.Name.toUpperCase()}</li>`)

        arrayStudentGrades.innerHTML = `<ul class="mb-0">
        ${studentWith70.join('')}
        </ul>`

        let studentsWith70andId120 = students.filter(element => {
            return element.Grades > 70 && element.Id > 120;
        }).map(element => element = `<li>${element.Name.toUpperCase()}</li>`)

        arrayStudentGradesANDId.innerHTML = `<ul class="mb-0">
        ${studentsWith70andId120.join('')}
        </ul>`
    }
    cancelButton2.addEventListener('click', () => {
        arrayStudentName.innerHTML = arrayStudentGrades.innerHTML = arrayStudentGradesANDId.innerHTML = ""
    })
}

/* JSNACK 3 - BICICLETTE
TODO Creare un array di oggetti:
TODO Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
TODO Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

function snack3() {
    reset()
    const snack = document.createElement('div');
    snack.id = "jsnack"
    snack.className = 'container my-5 d-flex flex-column p-4 bg-light border border-5 border-warning-subtle rounded-3';
    tmpl = `
    <h2 class="text-center mb-3 display-4 fw-bold text-secondary" style="-webkit-text-stroke: 1px black;">Bici da Corsa
    </h2>
    <h3>Elenco delle biciclette</h3>
    <div
      class="first-array bg-warning bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow"
      style="max-height:500px">
      <h4 id="bicycle-list" class=" mb-0"></h4>
    </div>
    <h3>Biciletta con peso minore</h3>
    <div
      class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow"
      style="max-height:500px">
      <h4 id="bicycle-min-weight" class="mb-0"></h4>
    </div>
    <h3>Bicicletta con peso maggiore</h3>
    <div
      class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow"
      style="max-height:500px">
      <h4 id="bicycle-max-weight" class="mb-0"></h4>
    </div>
    <div id="array-creation">
      <div class="buttons d-flex gap-5 justify-content-center ">
        <button id="get-bicycle" type="button"
          class="btn btn-lg  btn-success align-self-center border border-dark shadow">Ricerca la bici più pesante e più leggera</button>
        <button id="cancel-button-2" type="button"
          class="btn btn-lg btn-primary align-self-center border border-dark shadow">Nuove Bici al Negozio</button>
      </div>
    </div>
    `;
    snack.innerHTML = tmpl;
    App.append(snack);
    //input 
    //buttons
    const GetBicycle = document.getElementById("get-bicycle");
    const CancelButton2 = document.getElementById("cancel-button-2");
    //output
    const BicycleList = document.getElementById("bicycle-list");
    const BicycleMinWeight = document.getElementById("bicycle-min-weight");
    const BicycleMaxWeight = document.getElementById("bicycle-max-weight");
    //variables

    // const Bicycle = [
    //     { "nome": "Bici1", "peso": 7.2 },
    //     { "nome": "Bici2", "peso": 6.8 },
    //     { "nome": "Bici3", "peso": 8.0 },
    //     { "nome": "Bici4", "peso": 7.5 },
    //     { "nome": "Bici5", "peso": 6.9 },
    //     { "nome": "Bici6", "peso": 7.3 },
    //     { "nome": "Bici7", "peso": 7.1 },
    //     { "nome": "Bici8", "peso": 6.5 },
    //     { "nome": "Bici9", "peso": 8.2 },
    //     { "nome": "Bici10", "peso": 7.0 }
    // ]
    let bicycle = [];
    generateBicycle();
    function generateBicycle() {
        for (let i = 0; i < 15; i++) {
            let singleBicycle = {
                nome: `Bici-${i + 1}`,
                peso: `${parseFloat((getRndInteger(6, 8) + Math.random()).toFixed(1))}`
            }
            bicycle.push(singleBicycle)
        }
    }

    let bicycleCopy = [...bicycle]
    BicycleList.innerHTML = '<pre>' + JSON.stringify(bicycleCopy, null, 2) + '</pre>';

    GetBicycle.addEventListener('click', () => {

        let sortedArrayBicycleMinToMax = bicycleCopy.sort((a, b) => {
            return a.peso - b.peso
        })
        BicycleMinWeight.innerHTML = `La bicicletta più leggera è la ${sortedArrayBicycleMinToMax[0].nome}: con un peso di ${sortedArrayBicycleMinToMax[0].peso}kg`;
        BicycleMaxWeight.innerHTML = `La bicicletta più pesante è la ${sortedArrayBicycleMinToMax[sortedArrayBicycleMinToMax.length - 1].nome}: con un peso di ${sortedArrayBicycleMinToMax[sortedArrayBicycleMinToMax.length - 1].peso}kg`;
    })

    CancelButton2.addEventListener('click', () => {
        BicycleMinWeight.innerHTML = BicycleMaxWeight.innerHTML = "";
        bicycle = [];
        generateBicycle();
        bicycleCopy = [...bicycle]
        BicycleList.innerHTML = '<pre>' + JSON.stringify(bicycleCopy, null, 2) + '</pre>';
    })

}



/* JSNACK 3 - BICICLETTE
TODO Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
TODO Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
TODO Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
TODO Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console
*/
function snack4() {
    reset()
    const snack = document.createElement('div');
    snack.id = "jsnack"
    snack.className = 'container my-5 d-flex flex-column p-4 bg-light border border-5 border-warning-subtle rounded-3';
    tmpl = `
    <h2 class="text-center mb-3 display-4 fw-bold text-secondary" style="-webkit-text-stroke: 1px black;">Campionato
    </h2>
    <h3>Elenco delle Squadre</h3>
    <div
      class="first-array bg-warning bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow"
      style="max-height:500px">
      <h4 id="teams" class=" mb-0"></h4>
    </div>
    <div class="buttons d-flex gap-5 justify-content-center mb-3">
      <button id="start-championship" type="button"
        class="btn btn-lg  btn-success align-self-center border border-dark shadow">Inizia Campionato</button>
    </div>
    <h3>Falli Subiti</h3>
    <div
      class="second-array bg-danger bg-opacity-75 p-4 border border-dark border-2 rounded-2 mb-4 overflow-y-auto shadow"
      style="max-height:500px">
      <h4 id="teams-fail" class="mb-0"></h4>
    </div>
    `;
    snack.innerHTML = tmpl;
    App.append(snack);
    //input 
    //buttons
    const StartChampionship = document.getElementById("start-championship");
    //output
    const TeamsRecap = document.getElementById("teams");
    const TeamsFail = document.getElementById("teams-fail");
    const TeamsGoal = document.getElementById("teams-goal");
    //variables
    const Teams = [
        { "nome": "Juventus", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Inter", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Milan", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Napoli", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Roma", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Lazio", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Atalanta", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Fiorentina", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Sassuolo", "puntiFatti": 0, "falliSubiti": 0 },
        { "nome": "Torino", "puntiFatti": 0, "falliSubiti": 0 }
    ]

    let teamsCopy = [...Teams]
    TeamsRecap.append(createTable(teamsCopy));


    function createTable(array, color) {
        let { nome, puntiFatti = "", falliSubiti = "" } = array[0];
        const table = document.createElement('table');
        table.className = `table table-striped table-${color} border border-black rounded-3`;
        const THead = document.createElement('thead');
        THead.innerHTML += `
            <tr>
                <th scope="col" class="text-center">Position</th>
                <th scope="col">Nome</th>
                ${puntiFatti !== "" ? `<th scope="col" class="text-center">Punti Fatti</th>` : ""} 
                ${falliSubiti !== "" ? `<th scope="col" class="text-center">Falli Subiti</th>` : ""} 
            </tr>
        `;
        const TBody = document.createElement('tbody');
        array.forEach((element, index) => {
            const { nome, puntiFatti = "", falliSubiti = "" } = element;
            TBody.innerHTML += `
            <tr>
                <th scope="row" class="text-center">${index + 1}</th>
                <td >${nome}</td>
                ${puntiFatti !== "" ? `<td scope="col" class="text-center">${puntiFatti}</td>` : ""} 
                ${falliSubiti !== "" ? `<td scope="col" class="text-center">${falliSubiti}</td>` : ""} 
            </tr>
            `
        });
        table.append(THead, TBody);
        return table
    }

    StartChampionship.addEventListener('click', () => {
        StartChampionship.innerHTML = "Gioca un nuovo campionato"
        teamsCopy.forEach(element => {
            element.puntiFatti = getRndInteger(0, 30)
            element.falliSubiti = getRndInteger(0, 40);
        })
        teamsCopy.sort((a, b) => {
            return b.puntiFatti - a.puntiFatti
        })
        document.querySelector('#teams table').remove();
        TeamsRecap.append(createTable(teamsCopy, "warning"));
        let teamsFail = [...teamsCopy];
        teamsFail.map(element => delete element.puntiFatti);
        teamsFail.sort((a, b) => {
            return b.falliSubiti - a.falliSubiti
        })
        document.querySelector('#teams-fail table') ? document.querySelector('#teams-fail table').remove() : "";
        TeamsFail.append(createTable(teamsFail, "danger"));
    })
}
