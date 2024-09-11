/* Funciones */

/* 
sintaxis
  function nombre (parametro1, parametro2, ...) {
    cuerpo de la fucion
    return
  }

  Los parametro son opcinales en caso de que la funcion
  necesite datos adicionales para ejecutar el código, estos
  parámetros es la declaración de variables que posteriormente
  tomarán el valor que se le pase cuando la función
  sea invocada, este valor que se le pasa a la función
  se le conoce como argumento

  return es opcional, permite devolver un valor, 
  este valor puede ser cualquier tipo de dato sea
  primitivo o complejo, incluso puede retornar otra
  función
*/

/* Declaración */

function saludar() {
  console.log("Hola desde una función");
}
saludar(); // Invocación de la función

/* Parámetros y argumentos */

function saludarParametros(nombre, edad) {
  console.log(`Hola soy ${nombre}!, tengo ${edad} años`);
}
saludarParametros('Freddy', 37); // Aquí le pasamos los argumentos (valores)

/* Parámetros predeterminados / por defecto */

function saludarPredeterminados(nombre = 'Desconocido', edad = 0) {
  console.log(`Hola soy ${nombre}!, tengo ${edad} años`)
}
saludarPredeterminados()
saludarPredeterminados(undefined, 7)
saludarPredeterminados('Felipe')

/* Retorno de valores */

function multiplicar(a, b) {
  return a * b
}
let resultado = multiplicar(3, 9) // El valor retornado es asignado a una variable
console.log(`El resulado de la multiplicación es: ${resultado}`)

/* Funciones declaradas vs expresadas */

/* 
  Una declaración es una instrucción para hacer algo,
  como crear una varible, definir una función o 
  iniciar un bucle.
  Necesariamente cuando se declara algo se debe darle un 
  nombre e indicar lo que debe hacer.
  Cuando declaramos una función se le da un nombre
  y se le indica las intrucciones de lo que debe hacer.
  El motor de JavaScript aplica algo llamado "Hoisting" a las variables
  var y a las funciones declaradas, esto quiere decir que lo primero 
  que hace el motor es elevar al comienzo del ámbito las funciones y las
  variables var permitiendo que estas puedan ser invocadas antes de su
  definición.
*/

declarada() // Invocación antes de su definición
function declarada() { // declaración de la función
  console.log('Hola, soy una función declarada, puedo ser invocada antes de mi definición o despúes')
}
declarada() // Invocación después de su definición

/* 
  Las expresiones es todo aquel código que produce un valor, 
  desde una operación aritmética, un valor por sí mismo, 
  o una función asignada a una variable, las expresiones
  no requieren de un nombre, a estas expresiones no se les
  aplica el hoisting, lo que significa que no se pueden
  invocar antes de su definición/declaración.
*/
/* 
  Aquí la función no necesita un nombre, a esto se le
  conoce cómo funciones anónimas
*/

// funcionExpresada() esto genera un error: Cannot access 'funcionExpresada' before initialization
let funcionExpresada = function() { 
  console.log('Hola soy una función expresada, no puedo ser invocada antes de mi declaración')
}
funcionExpresada() // Invocación después de su declaración

// Arrow functions
const arrowFunc = (namme) => {
  console.log(`Saludos ${namme}!`);
};
arrowFunc("Miguel");

// funciones anidadas
function extternal() {
  console.log("saludando desde la función externa");
  function internal() {
    console.log("saludando desde la función interna");
  }
  internal();
}
extternal();
// internal() Error: función fuera del scope

// Funciones de orden superior
function applyfunc(fun, a, b) {
  let res = fun(a, b) * 2;
  console.log(res);
}
//applyfunc(defaultSum, 3, 9);

// ForEach
let movies = [
  "Top Gun: Maverick",
  "Iron Man",
  "Avengers",
  "Sonidos del silencio",
];
movies.forEach((movie, idx,)=> console.log(`${idx}: ${movie}`))

movies.forEach(function(movie, idx){
  console.log(`${movie}: ${idx}`)
})
