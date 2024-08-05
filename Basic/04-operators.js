// Operadores

// Aritmeticos
let a = 3
let b = 9

console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicación
console.log(a / b) // división

console.log(a % b) // módulo
console.log(a ** b) // exponente

// unarios
console.log(++a) // pre-incremento
console.log(a++) // post-incremento
console.log(a)
console.log(--b) // pre-incremento
console.log(b--) // post-incremento
console.log(b)

// Asignación
let myVariable = 2
console.log(myVariable)
myVariable += 3
console.log(myVariable)
myVariable -= 3
console.log(myVariable)
myVariable *= 3
console.log(myVariable)
myVariable /= 3
console.log(myVariable)
myVariable %= 3
console.log(myVariable)
myVariable **= 3
console.log(myVariable)

// Comparación
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)

let x = 27
console.log(x == x) // igualdad regular, type coercion, compara valor
console.log(x == "27")
console.log(x === "27") // igualdad estricta, sin type coercion, compara tipo y valor
console.log(x === x)
console.log(x != 27)
console.log(x != "27")
console.log(x !== "27")
console.log(null == undefined)
console.log(null === undefined)
console.log(null !== undefined)

// Lógicos
// AND &&
console.log(3 > 9 && 12 > 15)
console.log(3 < 9 && 12 < 15)

// OR ||
console.log(3 > 9 || 12 > 15)
console.log(3 < 9 || 12 < 15)
console.log(3 > 9 || 12 < 15)

// NOT !
console.log(!false)
console.log(!true)

// Operador ternario
let z = 18
let access = (z >= 18) ? "Concedido" : "Denegado"
console.log(access)
console.log("Hola" + 28)