// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function addition(num1, num2) {
  return num1 + num2;
}
let resultAddition = addition(3, 5);
console.log(resultAddition);

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const findNumber = (numbers) => {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largestNumber > numbers[i]) {
      continue;
    } else {
      largestNumber = numbers[i];
    }
  }
  console.log(`El número mayor es: ${largestNumber}`);
};
let arrayNumbers = [3, 1, 9, 21, 15];
findNumber(arrayNumbers);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function counterVowels(string) {
  let counter = 0;

  if (string.length === 0) {
    console.log("El string está vacío");
    return;
  } else {
    const vowels = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];

    for (let letter of string) {
      if (vowels.includes(letter.toLowerCase())) {
        counter++;
      }
    }
  }

  console.log(`El texto tiene ${counter} vocales`);
}

counterVowels("Mírame y bésame");

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function transformStrings(arrayStrings) {
  return arrayStrings.map((elementStr) => {
    return elementStr.toUpperCase();
  });
}

let myStrings = ["Promación", "JavaScript", "ReactJs", "vuejs"];
let newString = transformStrings(myStrings);

console.log(newString);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
let indicatorPrime = isPrime(3);
console.log(indicatorPrime);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const commonElements = (array1, array2) => {
  const commons = array1.filter((element) => {
    return array2.includes(element);
  });
  console.log("Elementos en común:", commons);
};
const elements1 = ["triángulo", "cuadradro", "círculo", "elipse", "trapecio"];
const elements2 = [
  "línea",
  "trapecio",
  "cubo",
  "triángulo",
  "esfera",
  "círculo",
];
commonElements(elements1, elements2);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function addEvenNumbers(array) {
  let total = array.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator += currentValue
    }
    return accumulator
  }, 0);
  console.log("Resultado de la suma:", total);
}
let arrayNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
addEvenNumbers(arrayNumbers2);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function squareNumbers(array) {
  return array.map((num) => num ** 2)
}
let newNumbers = squareNumbers(arrayNumbers2)
console.log(newNumbers)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const sortInReverse = (text) => {
  let words = text.split(" ")
  words.reverse()
  let invertedText = words.join(" ")
  console.log(invertedText)
}

let string = "Tú eres la más bella"
sortInReverse(string)


// 10. Crea una función que calcule el factorial de un número dado
function factorialNumber(num) {
  let factorial = num
  for (let n = num - 1; n > 1; n--) {
    factorial *= n
  }
  return factorial
}
let myFactorial = factorialNumber(5)
console.log('el factorial es:', myFactorial)