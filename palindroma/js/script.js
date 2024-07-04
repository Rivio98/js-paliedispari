//Creo una funzione che controlla se vengono inserite parole palindrome con queste indicazioni:
function palindrome(word) {

    //rendere le parole inserite sempre in minuscolo
    word = word.tolowercase();

    //divido, inverto e riunisco la parola inserita dall'utente creando una variabile
    let confrontWord = word.split('').reverse('').join('');

    //confronto le due parole
    return word === confrontWord
}