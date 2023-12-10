/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
1.String: presenta dei dati testuali
2.Number:un valore che puo essere un qualsiasi numero positivo o negativo con/senza virgola
3.Boolean: un entita logica che stabilisce se e vera o falsa una comparazione o un valore
4.null: un valore vuoto
5.undefined: un valore che non è stato ancora assegnato 

spiegato ad un bambino:

I datatype sono come una ricetta  presentano le STRING che sono come la farina ,sale 
zucchero al quale poi diamo un valore numerico il NUMBER che puo essere un qualsiasi numero come 500gr 30 gr ,
poi ce BOOLEAN che serve per capire se è vera o falso quando andiamo ad indagare/confrontare ingredienti e quantita 
poi abbiamo NULL che  definisce una ciotala vuota senza nussun contunuto e infine 
UNDEFINED che sarebbe una ciotola con qualcosa all'interno che non sappiamo.



*/

/* ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.*/

 /* E' un contenitore di proprieta/dati messi assieme per formare un unica identita, 
 esempio come i singoli dati di un individuo messi insieme identificano quella persona*/


let nome= "karina"
let cognome= "bezhushko"
let hobby= "nuoto"
let infoPersonali= nome+"  "+cognome+"  "+hobby;
console.log(infoPersonali);


/* ESERCIZIO 
Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1=12;
let number2=20;
let somma= number1+number2;
console.log(somma);

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let variable1="x";
let x= 12;
console.log(x);


/* ESERCIZIO 5
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name= "karina"

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let variable2= 4 ;
let diff= 4-x;
console.log(diff);


/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1="john";
let name2="John";
console.log( name1===name2); 
console.log(name1.toLowerCase()===name2.toLowerCase())



