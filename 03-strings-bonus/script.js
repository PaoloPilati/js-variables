const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city (https://www.andreaminini.com/javascript/il-metodo-indexof-di-javascript)
const cityIndex = city.indexOf('Y');
console.log(cityIndex); // Output: 4

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city  (https://devacademy.it/javascript-substring-come-estrarre-caratteri-da-una-stringa/)
const citySubstring = city.substring(4, 8);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi' (https://www.andreaminini.com/javascript/il-metodo-replace-di-javascript)
const cityReplaced = city.replace('York', 'Dehli');
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City' https://www.codingcreativo.it/stringhe-in-javascript/
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello https://www.codingcreativo.it/javascript-touppercase/
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"
