// Funciones

// simple
function myFunc() {
  console.log("Hola función");
}
myFunc();

// con parámetros y argumentos
function myFuncParams(namme) {
  console.log(`Hola ${namme}!`);
}
myFuncParams("Dani");
myFuncParams("Brais");

// parámetro por defecto
function sum(a, b) {
  console.log(a + b);
}

sum(3, 9);
sum(3);
sum();

function defaultSum(a = 0, b = 0) {
  return a + b;
}

defaultSum();
defaultSum(3);
defaultSum(9, 3);
defaultSum(9, 12);

// return
function mult(a, b) {
  return a * b;
}
let result = mult(3, 5);
console.log(result);

// Anómimas
const anonima = function (namme) {
  console.log(`Hola ${namme}!`);
};
anonima("Gabriel");

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
applyfunc(defaultSum, 3, 9);

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
