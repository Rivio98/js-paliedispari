//creo un funzione per generare un numero random da 1 a 5
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//creo un'atra funzione per determinare se un numero è pari
function isEven(number) {
    return number % 2 == 0;
}

//creo un prompt dove chiedo all'utente di scrivere pari o dispari
let userChoice = prompt('Pari o Dispari ? ').toLocaleLowerCase();

//creo un'altro prompt dove chiedo all'utente un numero da 1 a 5
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5 '));

//genero in modo randomico un numero per il computer da 1 a 5
let computerNumber = getRandomNumber();