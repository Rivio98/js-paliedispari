//creo un funzione per generare un numero random da 1 a 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//creo un'atra funzione per determinare se un numero è pari
function isEven(number) {
    return number % 2 == 0;
}

//creo un prompt dove chiedo all'utente di scrivere pari o dispari
let userChoice = prompt(`Pari o Dispari ? `).toLocaleLowerCase();

//creo un'altro prompt dove chiedo all'utente un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5 '));
console.log(`Tuo numero: ${userNumber}`);
//genero in modo randomico un numero per il computer da 1 a 5
let computerNumber = getRandomNumber();
console.log(`Numero avversario: ${computerNumber}`);
//Sommare il numero utente e il numero computer
let result = userNumber + computerNumber

//stabilire se la somma è pari o dispari

let resultEven = isEven(result);

console.log(`Somma: ${result}`);

//dichiaro l'esito 
//se l'utente ha scelto pari ed il numero finale è pari, l'utente vince.
if ((resultEven && userNumber === 'pari') || (!resultEven && userNumber === 'dispari')) {
    console.log("Hai vinto!");//se l'utente ha scelto dispari ed il numero finale è dispari, l'utente vince.
} else {
    console.log("Hai perso!");//altrimenti l'utente perde
}

