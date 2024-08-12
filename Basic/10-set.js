// Set

let mySet = new Set() // declaración
console.log(mySet)
console.log(typeof mySet)
mySet = new Set(['daniel', 'juan', 'mauricio', 'benito', 'rita']) // inicialización
console.log(mySet)

// métodos comunes 

// add
mySet.add(59) // agrega elementos al final del set
mySet.add(true)
console.log(mySet)

// delete
let existe = mySet.delete('daniel') // elimina el elememto especificado y retorna true si existe o false en caso contrarios
console.log(mySet)
console.log(existe)
existe = mySet.delete('bris')
console.log(existe)

// has
console.log(mySet.has("mauricio")) // valda si existe o no un elemento
console.log(mySet.has(3))

// size
console.log(mySet.size) // retorna el tamaño del set

// convertir un set en array
let myArray = Array.from(mySet)
console.log(myArray)

// clear
mySet.clear() // elimina todo el contenido del set
console.log(mySet)

// convetir un array a set
mySet = new Set(myArray)
console.log(mySet)

// No admite elementos duplicados
mySet.add("benito")
mySet.add("rita")
console.log(mySet)
mySet.add("Rita")
console.log(mySet)