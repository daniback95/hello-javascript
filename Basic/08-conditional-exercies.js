// 1. Imprime por consola tu nombre si una variable toma su valor
let namme = "Dani";
let code = 3;
if (code === 3) {
  console.log("Su nombre es:", namme);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "mouredev3";
let password = "javaScript_dev@";

let userInput = "mouredev";
let passwordInput = "javaScript_dev@";

if (user === userInput && password === passwordInput) {
  console.log("Acceso autorizado");
} else {
  console.log("Acceso denegado, usuario o contraseña incorrecto");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 9;

if (number > 0) {
  console.log("El número ingresado es positivo");
} else if (number < 0) {
  console.log("El número ingresado es negativo");
} else {
  console.log("El número ingresdo es igual a cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let adulthood = 18;
let age = 15;

if (age >= adulthood) {
  console.log("La persona puede ejercer su voto");
} else {
  let remainingYears = adulthood - age;
  console.log(
    `La persona no puede ejercer su voto, le faltan ${remainingYears} años para ser mayor de edad`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let groupAge = age >= adulthood ? "Adulto" : "Menor";
console.log(groupAge);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "agosto";

if (mes === "marzo" || mes === "abril" || mes === "mayo") {
  console.log("Primavera");
} else if (mes === "junio" || mes === "julio" || mes === "agosto") {
  console.log("Verano");
} else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
  console.log("Otoño");
} else if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
  console.log("Invierno");
} else {
  console.log("El mes ingresado no existe");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  mes === "enero" ||
  mes === "marzo" ||
  mes === "mayo" ||
  mes === "julio" ||
  mes === "agosto" ||
  mes === "octubre" ||
  mes === "diciembre"
) {
  console.log(`El mes de ${mes} tiene 31 días`);
} else if (
  mes === "abril" ||
  mes === "junio" ||
  mes === "septiembre" ||
  mes === "noviembre"
) {
  console.log(`El mes de ${mes} tiene 30 días`);
} else if (mes === "febrero") {
  console.log(`El mes de ${mes} tiene 28 días o 29 si es año bisiesto`);
} else {
  console.log("El mes ingresado no existe");
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "latin";
switch (language) {
  case "latin":
    console.log("Salvete ex Colombia");
    break;
  case "spanish":
    console.log("Saludos desde Colombia");
    break;
  case "english":
    console.log("Greetings from Colombia");
    break;
  case "italian":
    console.log("Saluti dalla Colombia");
  case "french":
    console.log("Salutations de la Colombie");
    break;
  default:
    console.log("Idioma no disponible");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Primavera");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("Verano");
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Otoño");
    break;
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Invierno");
    break;
  default:
    console.log("El mes ingresado no existe");
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch (mes) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log(`El mes de ${mes} tiene 31 días`);
    break;
  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log(`El mes de ${mes} tiene 30 días`);
    break;
  case "febrero":
    console.log(`El mes de ${mes} tiene 28 días o 29 si es año bisiesto`);
    break;
  default:
    console.log("El mes ingresado no existe")
}
