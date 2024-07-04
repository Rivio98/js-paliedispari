//Creo una funzione che controlla se vengono inserite parole palindrome con queste indicazioni:
function palindrome(word) {

    //rendere le parole inserite sempre in minuscolo
    word = word.tolowercase();

    //divido, inverto e riunisco la parola inserita dall'utente creando una variabile
    let confrontWord = word.split('').reverse('').join('');

    //confronto le due parole
    return word === confrontWord
}

//chiedo all'utente di inserire una parola 
let word = prompt('Inserisci una parola: ')

//se la parola è palindroma:
if (palindrome(word)) {
    console.log('La parola è palindroma');//ridai in console "La parola è palindroma"
} else {
    console.log('La parola non è palindroma');//altrimenti :"La parola non è palindroma"
}

