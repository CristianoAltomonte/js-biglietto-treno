/* ESERCIZIO

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/ 


let numeroKm = prompt('Numero chilometri da percorrere ?');
let age = prompt('Quanti anni ha ?');
const prezzoKm = 0.21;
let prezzoBiglietto = numeroKm * prezzoKm;
let minorenni = prezzoBiglietto * 0.2;
let over65 = prezzoBiglietto * 0.4;

if (age <=18) {
    prezzoBiglietto = (prezzoBiglietto - minorenni).toFixed(2);
}

if (age >= 65) {
    prezzoBiglietto = (prezzoBiglietto - over65).toFixed(2) ;
}

else {
    prezzoBiglietto = prezzoBiglietto.toFixed(2) ;
}

document.getElementById('costoBiglietto').innerHTML = 'Il prezzo del biglietto è: ' + prezzoBiglietto + '€';