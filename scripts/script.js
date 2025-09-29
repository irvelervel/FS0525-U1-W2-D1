// Il nostro primo file JS!
// Il mestiere dello sviluppatore sw consiste nel RISOLVERE PROBLEMI.
// Un problema si risolve creando una serie ordinata di step: un ALGORITMO.
// Se il problema rimane lo stesso, applicando lo stesso algoritmo lo risolviamo
// ogni singola volta.

// Al fine di scrivere un algoritmo, sarà necessaria (quasi sempre) la creazioni
// di VARIABILI.
// Se volessimo creare una torta, potremmo immaginare tutte le bacinelle contenenti
// gli ingredienti come delle VARIABILI: sarà necessario mischiarle tra di loro
// secondo un determinato ordine al fine di ottenere il risultato sperato.

// VARIABILI
// Una VARIABILE in JS si dichiara con la parola chiave: "let"
let dog
// ho creato una variabile di nome "dog"
// il nome delle variabili è completamente a vostra scelta. Dovete solo fare attenzione
// a non cominciare il nome con un numero o un simbolo, seguendo la nomenclatura
// "camelCase"
let stefanoIsATeacher
// queste due variabili che ho appena creato hanno al momento un contenuto
// che non è stato definito da nessuna parte: hanno un valore "undefined"
dog = 'Fido' // questo è un valore STRINGA, va delimitato tra ' ' o " "
// variabile <- valore

let numberOfFireworks
// dog qui vale "Fido"
// numerOfFireworks vale undefined

// un console.log() è un metodo per stampare un messaggio nella console del browser
// i console.log() sono utili per stampare una riga di testo, un messaggio oppure
// per aprire una variabile e vederne il contenuto
console.log(dog)
// quando i console.log() diventano tanti, può essere utile personalizzarli con
// un messaggio che spiega cosa stiamo andando a verificare
console.log('VALORE DI DOG', dog)
console.log('quanto vale numberOfFireworks inizialmente', numberOfFireworks) // il valore è undefined
numberOfFireworks = -10
console.log('quanto vale numberOfFireworks dopo', numberOfFireworks) // il valore è 18

console.log('CIAO STEFANO')

numberOfFireworks = 56
numberOfFireworks = 99

// è anche possibile CREARE una variabile e ASSEGNARLE un valore in un colpo solo
let teacher = 'Stefano' // la variabile teacher NASCE con il valore di 'Stefano'
teacher = 'Giuseppino'

// QUALI TIPI DI DATO ESISTONO IN JS? (TIPI PRIMITIVI)
// string -> 'Stefano', 'Fido', '', 'Impariamo JS!'
// number -> 0, 100, 28, -3, 15.56
// boolean -> true, false
// undefined -> tipico di una variabile inizializzata ma non ancora assegnata ad un valore (indica l'ASSENZA di un valore)
// null -> un valore completamente VUOTO, INESISTENTE, AZZERATO. SVUOTATE la variabile.

let haiLaPatente = false

let myFavouriteNumber = 7
myFavouriteNumber = 12

// myFavouriteNumber = 'EPICODE' // SCONSIGLIATO!!!
// questa variabile è nata inizialmente per ospitare un TIPO di dato numerico
// buona prassi sarebbe assegnarle sempre valori NUMERICI
console.log('VALORE DI MYFAVNUMBER', myFavouriteNumber)
