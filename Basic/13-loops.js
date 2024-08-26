// Loops - bucles

// for
for (let i = 0; i < 5; i++) {
  console.log("Hola programador");
}

const vowels = ["a", "e", "i", "o", "u"];
for (let v = 0; v < vowels.length; v++) {
  console.log(`For, Elemento ${v}: ${vowels[v]}`);
}

// while
let vow = 0;
while (vow < vowels.length) {
  console.log(`While, Elemento ${vow}: ${vowels[vow]}`);
  vow++;
}

// do while
let flag = false;

do {
  console.log(`Esto se ejecuta mínimo una sola vez`);
} while (flag);

// for of
const fruits = ["mora", "guanabana", "naranja", "mandarina", "fresa"];

const nammes = new Set(["daniel", "juan", "mauricio", "benito", "rita"]);

const months = new Map([
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

for (const value of fruits) {
  console.log(value)
}

for (const value of nammes) {
  console.log(value)
}

for (const value of months) {
  console.log(value)
}

// continues y break
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (num of numbers) {
  if(num === 4) {
    continue
  } else if (num === 8 ) {
    break
  }
  console.log(`numero = ${num}`)
}