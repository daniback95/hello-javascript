// propagación - extensión

// En arrays
let fruits = ["duranzno", "piña", "melón"];
console.log(fruits)

// copia los elementos
let fruits2 = [...fruits] 
console.log(fruits2)

// combina los elementos
let favoriteFruits = ['kiwi', 'feijoa', 'papayuela']; 
let allFruits = [...favoriteFruits, 'mandarina', 'pitaya', ...fruits2]
console.log(allFruits)


// En objetos
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

// copia las propiedades y métodos
let myCar = {...car}
console.log(myCar)

// extendiendo el objeto
let myCarExtend = {
  ...car, 
  manufacturing: {
    country: 'alemania',
    city: 'Ingolstadt',
  }
}

console.log(myCarExtend)

