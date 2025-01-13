/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*/


/* stampare i numeri da 1 a 100 con un ciclo for*/
for(let i = 1; i <= 100; i++ ){

   /* utilizziamo la condizione if per controllare i 3 casi e stampare i diversi valori della condizione*/
    if( i % 3 == 0 && i % 5 == 0 ){
        console.log ( `il numero ${i} è divisibile per 3 e 5: fizzbuzz`)
    }
    else if( i % 3 == 0 ) {
        console.log ( `il numero ${i} è divisibile per 3: fizz`)
    }
    else if( i % 5 == 0) {
        console.log ( `il numero ${i} è divisibile per 5: buzz`)
    }
    else {
        console.log ( `il numero ${i}  non è divisibile per 3 e 5: ${i}` )
    }
}