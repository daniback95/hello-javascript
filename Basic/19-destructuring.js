// Desestructuración
// En arrays
const fruits = ["mazanza", "pera", "feijoa", "piña", "limón"];
let [a, b, c] = fruits;
console.log(a);
console.log(b);
console.log(c);

// con valores por defecto
const fruits2 = ["banano", "kiwi", "guanabana"];
let [d, e, f, g = null, h = 0] = fruits2;
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// Ignorar valores
let [i, , j] = fruits2;
console.log(i);
console.log(j);

// Intercambio de valores
let x = 3;
let z = 9;
// console.log(x, z)
// [x, z] = [z, x]
// console.log(x, z)

// En objetos
function Person(namme, age, nickname) {
  this.namme = namme;
  this.age = age;
  this.nickname = nickname;
}
const person1 = new Person("Sebastián", 24, "sebas");

let { namme, age, nickname } = person1;
console.log(namme, age, nickname);

// con valores por defecto
let { namme2, age2, nickname2, email = "correo@gmail.com" } = person1;
console.log(namme2); // no existe
console.log(age2); // no existe
console.log(nickname2); // no existe
console.log(email); // aunque no existe tiene un valor por defecto

// con nuevos nombres para las propiedades del objeto
let {
  namme: namme3,
  age: age3,
  nickname: nickname3,
  email: mail = "correo-mail@gmail.com",
} = person1;
console.log(namme3, age3, nickname3, mail);

// En anidación de objetos
let car = {
  brand: "audi",
  line: "S e-tron GT",
  model: 2024,
  color: "blue",
  acelerar: function () {
    console.log("Aceleración máxima... 320Km/h");
  },
  frenar() {
    console.log("Frenando... 0Km/h");
  },
  typology: {
    type: "Sports",
    engine: "electrico",
    drivingModes: ["comfort", "efficiency", "dynamic", "individual"],
    soundEtron: {
      sports() {
        console.log("Aplicando sonido deportivo");
      },
      balanced() {
        console.log("Aplicando sonido equilibrado");
      },
      faint() {
        console.log("Aplicando sonido tenue");
      },
    },
  },
};

let { line, brand, acelerar } = car;
console.log(brand);
console.log(line);
acelerar();

let {
  typology: {
    type,
    engine,
    drivingModes: [, , dM3],
    soundEtron: { sports: deporttivo },
  },
  brand: marca,
} = car;

console.log(type);
console.log(engine);
console.log(dM3);
deporttivo();
console.log(marca)
