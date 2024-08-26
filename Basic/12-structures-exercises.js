// 1. Crea un array que almacene cinco animales
let animals = ["mantis", "iguana", "lobo", "oso polar", "elefante"];
console.log(animals);
// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("león");
animals.push("tiburón");
console.log(animals);
// 3. Elimina el que se encuentra en tercera posición
let animalRemove = animals.splice(2, 1);
console.log(animals);
console.log(animalRemove);
// 4. Crea un set que almacene cinco libros
let books = new Set([
  "La Divina Misericordia",
  "La Mística Ciudad de Dios",
  "Mujercitas",
  "El Psicoanalista",
  "100 años de soledad",
]);
console.log(books);
// 5. Añade dos más. Uno de ellos repetido
books.add("Crónica de una muerte anunciada");
books.add("El Psicoanalista");
console.log(books);
// 6. Elimina uno concreto a tu elección
let bookRemove = books.delete("El Psicoanalista");
console.log(bookRemove);
console.log(books);
// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);
console.log(months);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (months.has(5)) {
  console.log(months.get(5));
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", [months.get(6), months.get(7), months.get(8)]);
console.log(months);
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let movies = [
  "Top Gun: Maverick",
  "Iron Man",
  "Avengers",
  "Sonidos del silencio",
];
console.log(movies)

let setMovies = new Set(movies)
console.log(setMovies)

let mapMovies = new Map()
console.log(mapMovies)

mapMovies.set("favoriteMovies", setMovies)
console.log(mapMovies)

let updateMovies = mapMovies.get("favoriteMovies")
console.log(updateMovies)
updateMovies.add('Oppenheimer')
console.log(updateMovies)

mapMovies.set("favoriteMovies", updateMovies)
console.log(mapMovies)