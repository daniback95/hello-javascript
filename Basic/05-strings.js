// Strings
let nickName = "daniback"
let greeting = "Hola " + nickName + "!"
console.log(greeting)
console.log(typeof greeting)

// longitud
console.log(greeting.length)

// Accediendo a caracateres
console.log(greeting[0])
console.log(greeting[5])
console.log(greeting[9])
console.log(greeting[greeting.length - 1]) // El último caracter
console.log(greeting[14 - 1]) // lo mismo que lo anterior
console.log(greeting[13])

// Métodos
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("dani"))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Dani"))
console.log(greeting.includes("daniback"))
console.log(greeting.includes("danidev"))
console.log(greeting.includes("h"))
console.log(greeting.includes("H"))
console.log(greeting.slice(9, 14))
console.log(greeting.replace("Hola", "Saludos"))

// Template  literals
let message = `Hola, estoy 
haciendo un 
buen curso 
de JavaScript`
console.log(message)