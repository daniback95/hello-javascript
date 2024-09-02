// Objects

// Declaración e inicialización
let person = {
  'namme': 'Daniel',
  'age': 24,
  'nickname': 'daniback95'
}
console.log(person)

// Acceso a las propiedades
console.log(person.namme) // notación del punto
console.log(person['age']) // notación de corchetes

// Modificación de propiedades
person.nickname = 'dani'
console.log(person.nickname)

console.log(person.age)
console.log(typeof person.age) // de tipo número
person.age = '24'
console.log(person.age) // aquí se ha cambiado a tipo string
console.log(typeof person.age)

// Eliminanr propiedades
delete person.age
console.log(person)

// Agregar propiedades
person.email = 'danib@daniback.com'
person['pais'] = 'Italia'
console.log(person)

// Métodos (funciones)
let car = {
  brand: 'audi',
  model: 2024,
  color: 'blue',
  acelerar: function() {
    console.log('Aceleración máxima... 320Km/h')
  },
  frenar() {
    console.log('Frenando... 0Km/h')
  }
}
car.acelerar()
car.frenar()

let car2 = {
  brand: 'audi',
  line: 'S e-tron GT',
  model: 2024,
  color: 'blue',
  acelerar: function() {
    console.log('Aceleración máxima... 320Km/h')
  },
  frenar() {
    console.log('Frenando... 0Km/h')
  },
  typology: {
    type: 'Sports',
    engine: 'electrico',
    drivingModes: ['comfort', 'efficiency', 'dynamic', 'individual'],
    soundEtron: {
      sports() {
        console.log('Aplicando sonido deportivo')
      },
      balanced() {
        console.log('Aplicando sonido equilibrado')
      },
      faint() {
        console.log('Aplicando sonido tenue')
      }
    }
  }
}
console.log(car2)
console.log(car2.line)
console.log(car2.typology)
console.log(car2.typology.drivingModes[2])
console.log(car2.typology.soundEtron.sports())

let person2 = {
  namme: 'Daniel',
  nickname: 'dani',
  email: 'danib@daniback.com',
  pais: 'Italia',
}

console.log(person)
console.log(person2)

console.log(person == person2)
console.log(person === person2)

console.log(person.namme == person2.namme)

// Iteración
for(let key in person2) {
  console.log(key)
}

for(let key in person2) {
  console.log(`${key}: ${person2[key]}`)
}

// Operador in
console.log('email' in person2)

// this
let person3 = {
  namme: 'Juan',
  age: 10,
  email: 'juan@juan.com',
  saludar() {
    console.log(`${this.namme} está saludando`)
  },
}
console.log(person3.saludar())

// Objetos a partir de funciones
function Car(brand, model, engine) {
  this.brand = brand
  this.model = model
  this.engine = engine
}
const car3 = new Car('ford', 1969, '4 En línea');
console.log(car3)
console.log(typeof car3)
for (const key in car3) {
  console.log(`${key}: ${car3[key]}`)
}