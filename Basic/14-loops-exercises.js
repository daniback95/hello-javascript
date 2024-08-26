// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let num = 1;
let sum = 0;
while (num <= 100) {
  sum += num;
  num++;
}
console.log(`La suma total es de ${sum}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (num = 1; num <= 50; num++) {
  if (num % 2 === 0) {
    console.log(num)
  }
}
// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nammes = ["Daniel", "Juan", "Mauricio", "Benito", "Rita"]
for (const namme of nammes) {
  console.log(namme)  
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text = '¡Hola JavaScript!'
let counterVowel = 0
const vowels = ['a', 'e', 'i', 'o', 'u']
for (let i = 0; i < text.length; i++) {
  let textLetter = text[i].toLowerCase()
  for (let v = 0; v < vowels.length; v++) {
    if (vowels[v] === textLetter) {
      counterVowel++
    }
  }
}
console.log(`El texto ${text} tiene ${counterVowel} vocales`)

let counter2 = 0
for (let letterText of text) {
  for (const vowel of vowels) {
    if(vowel === letterText.toLowerCase()) {
      counter2++
    }
  }
}
console.log('Ese es el contador de vocales 2: ', counter2)

let counter3 = 0
for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i].toLowerCase())) {
    counter3++
  }
}
console.log("Este el contador de vocales 3:", counter3)

let counter4 = 0
for (let letterText of text) {
  if(vowels.includes(letterText.toLowerCase())) {
    counter4++
  }
}
console.log("Este el contador de vocales 4:", counter4)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numbers = [3, 6, 9, 12]
let i = 0
let product = 1
while (i < numbers.length) {
  product *= numbers[i]
  i++
}
console.log(`El resultado de la multiplicación es: ${product}`)

let product2 = 1
for (const num of numbers) {
  product2 *= num
}
console.log(`El resultado 2 de la multiplicación es: ${product2}`)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let multiplicando = 0; multiplicando <= 10; multiplicando++) {
  let product = 5 * multiplicando
  console.log(`5 * ${multiplicando} = ${product}`)
}
// 8. Usa un bucle para invertir una cadena de texto
let invertedText = ""
for (let idx = -1; idx >= -text.length; idx--) {
  invertedText += text.at(idx)
}
console.log(invertedText)

let invertedText2 = ""
for (let idx = text.length - 1; idx >= 0; idx--) {
  invertedText2 += text[idx]
}
console.log(invertedText2)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log('serie fibonacci')
let a = 0
let b = 1
let f = 0

for (let i = 0; i < 10; i++) {
  console.log(f)
  a = b
  b = f
  f = a + b
}
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNumbers = [9, 83, 5, 3, 24]
let largerNumbers = []
let indice = 0
while (indice < arrayNumbers.length) {
  if (arrayNumbers[indice] < 10) {
    indice++
    continue
  } else {
    largerNumbers.push(arrayNumbers[indice])
    indice++
  }
}
console.log(largerNumbers)
