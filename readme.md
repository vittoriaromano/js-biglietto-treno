Il programma dovrà chiedere all’utente il numero
//assicurati i prompt siano numerici

 di chilometri che vuole percorrere
//prompt eichiesta di kilometri  "distanza"

e l’età del passeggero.
//prompt richiesta anni 



Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)

//prezzo = (0.21 * distanza)

-va applicato uno sconto del 20% per i minorenni
//Se l'eta inserita e' minore di 18
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 20)

-va applicato uno sconto del 40% per gli over 65.
//Se l'eta inserita e' maggiore/uguale di 65
  //calcola prezzoScontato = prezzo - (prezzo / 100 * 40)


//Se l'eta e maggiore di 18 e inferiore di 65 
   //mostra il prezzo originale
