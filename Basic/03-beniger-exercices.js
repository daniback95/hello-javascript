/* 
1. Escribe un comentario en una línea

2. Escribe un comentario en varias líneas

3. Declara variables con valores asociados a todos los datos de tipo primitivos

4. Imprime por consola el valor de todas las variables

5. Imprime por consola el tipo de todas las variables

6. A continuación, modifica los valores de las variables por otros del mismo tipo

7. A continuación, modifica los valores de las variables por otros de distinto tipo

8. Declara constantes con valores asociados a todos los tipos de datos primitivos

9. A continuación, modifica los valores de las constantes

10. Comenta las líneas que produzcan algún tipo de error al ejecutarser 
*/

// Este es un comentario en una linea

/* 
Este es 
un comentario
multilínea 
*/

let user = "Aegon"
let age = 32
let heir = true
let counter
let total = null
let letter = Symbol("d")
let bigNumber = 4354895695n

console.log(user)
console.log(age)
console.log(heir)
console.log(counter)
console.log(total)
console.log(letter)
console.log(bigNumber)

console.log(typeof user)
console.log(typeof age)
console.log(typeof heir)
console.log(typeof counter)
console.log(typeof total)
console.log(typeof letter)
console.log(typeof bigNumber)

user = "Anonymus"
age = 25
heir = false
letter = Symbol("b")
bigNumber = 24687784254n

user = true
age = Symbol("c")
heir = "Aegon"
counter = 4354895695n
total = null
letter = 32
bigNumber = undefined

const string = "texto"
const number = 3.1416
const isStudent = true
const id = Symbol(1)
const value = null
const pass = undefined
const bgNumber = 1341451454662n

/* 
string = undefined
number = null
isStudent = false
id = 1341451454662n
value = 3.1416
pass = "texto"
bgNumber = Symbol(1) 
*/