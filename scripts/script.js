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
teacher = 'Giuseppino' // le riassegno un nuovo valore, "Giuseppino"

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

// se utilizzate righe separate per la creazione e l'assegnazione del valore
// ad una variabile, ricordatevi che non si può accedere ad una variabile PRIMA
// di averla inizializzata!
let favouriteColor
favouriteColor = 'green'

// QUESTE DUE RIGHE DANNO ERRORE!
// anotherColor = 'red'
// let anotherColor

// OPERATORI MATEMATICI
// + - * /
let n1 = 8
let n2 = 3 + 2 // 5

let s1 = n1 + n2 // 13
console.log('il valore di s1 è', s1)

let n3 = 12.5
let n4 = 4.6
let s2 = n3 - n4 // 7.9

let n5 = 5 * 4 // 20
let n6 = n5 / 5 // 4

// OPERATORE MODULO (%)
// il modulo è detto anche RESTO DELLA DIVISIONE
let n7 = 20 % 6 // 2
console.log('ESEMPIO MODULO', n7)

// CONCATENAZIONE STRINGHE
let str1 = 'Ciao'
let str2 = 'Stefano'
let res1 = str1 + str2
console.log('RES1', res1) // 'CiaoStefano'

let str3 = 'Buongiorno'
let str4 = 'Ragazzi'
let res2 = str3 + ' ' + str4
console.log('RES2', res2) // 'Buongiorno Ragazzi'

// OPERATORI LOGICI
// < > <= >= ! === !==
let log1 = 7 < 8 // true
let log2 = 15 > 22 // false
let log3 = 3 < 3 // false
let log4 = 3 <= 3 // true
let log5 = !log4 // l'inverso di log4, false
let log6 = 14 === 14 // si legge "14 uguale a 14" -> true
let log7 = 16 !== 23 // si legge "16 diverso da 23" -> true

let log8 = 14 === '14' // false, l'operatore === compara SIA il valore SIA il tipo
// warning: esiste anche il == che controlla solo il valore e non il tipo,
// ma... fate finta che non esista! :)
// let log9 = 14 == '14' // true

let bossFinale1 = '14' + '16' // '1416', NON 30!!!
let bossFinale2 = 14 + '16' // '1416', NON 30!!!
// la somma funziona solamente se tutti gli addendi sono numeri!

console.log(14 === 7 + 7)

let bossFinale3 = 15 + undefined
console.log('numero + undefined fa:', bossFinale3)
