// Arrays

let data1 = []
let data2 = new Array(3)

console.log(data1)
console.log(data2)

// Inicialización
data1 = [3]
data2 = new Array(1, 2, 3, 4, 5)

console.log(data1)
console.log(data2)

data1 = ["daniel", "juan", "daniback"]
data2 = new Array("JavaScript", "React", "Vue" )

console.log(data1)
console.log(data2)

data1 = []
data2 = new Array(3)

data1[0] = "feijoa"
data1[1] = true
data1[2] = 9

console.log(data1)

data2[0] = "Azus"
data2[1] = 1995
data2[2] = 9 > 3

console.log(data2)

// Métodos comunes

let data3 = []

// push - pop

data3.push("mandarina") // Agrega elementos al final del array y retorna el nuevo tamaño del array
console.log(data3)

data3.push("fresa", "dátiles")
console.log(data3)

let elementRemove1 = data3.pop() // elimina y retorna el último elemento del array
console.log(data3)
console.log(elementRemove1)

// unshift - shift

data3.unshift("naranja") // agrega elementos al inicio del array y retorna el nuevo tamaño del array
console.log(data3)
let lengthData3 = data3.unshift("mora", "guanabana")
console.log(data3)
console.log(lengthData3)

let elementRemove2 = data3.shift() // Elimina y retorna el primer elemento del array
console.log(data3)
console.log(elementRemove2)

// length

console.log(data3.length) // Propiedad que permite ver el tamaño de array

// clear, limpiar por completo un array

data1 = [] // más convencional y compresible
// data1.length = 0 // Esta es una alternativa
console.log(data1)

// slice

let nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
let nombresMasculinos = nombres.slice(1, 3) // retorna una copia de la parte del array indicado
console.log(nombresMasculinos)

// splice

let removeNombres = nombres.splice(3, 2) // elimina elementos del array y retorna los elementos eliminados
console.log(removeNombres) // elemetos eliminados
console.log(nombres) // array modificado, sin los elementos eliminados

nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
let removeNombres2 = nombres.splice(2, 1, "Daniel")
console.log(removeNombres2)
console.log(nombres)