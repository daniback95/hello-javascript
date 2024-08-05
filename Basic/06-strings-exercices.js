// 1. Concatena dos cadenas de texto
let nickName = "daniback"
let welcome = "Bienvenido"
let lenguage = "JavaScript"
console.log(welcome, nickName, "a", lenguage)

// 2. Muestra la longitud de una cadena de texto
let lengthWord = lenguage.length
console.log(lengthWord)

// 3. Muestra el primer y último carácter de un string
console.log("first:", nickName[0], "last:", nickName[nickName.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(lenguage.toUpperCase())
console.log(lenguage.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let multiLineText = `JavaScript, 
uno de los lenguajes más populares y 
usados.`
console.log(multiLineText)
// 6. Interpola el valor de una variable en un string
console.log(`${welcome} ${nickName}, al lenguaje más popular, ${lenguage}!`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(multiLineText.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(multiLineText.includes(lenguage))
// 9. Comprueba si dos strings son iguales
let lenguage2 = "Java"
let areEqual = (lenguage === lenguage2) 
                ? `${lenguage} y ${lenguage2} son iguales`
                : `${lenguage} y ${lenguage2} no son iguales`
console.log(areEqual)                

// 10. Comprueba si dos strings tienen la misma longitud
console.log(nickName.length == lenguage.length)