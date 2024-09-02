// Clases
class Person {
  constructor(namme, age, nickname) {
    this.namme = namme;
    this.age = age;
    this.nickname = nickname;
  }
}

let person1 = new Person("dani", 24, "daniback95");
console.log(person1);

let person2 = new Person("Juan", 12, "juanse");
console.log(person2);

console.log(typeof Person);
console.log(typeof person1);

// Valores por defecto
class DefaultPerson {
  constructor(namme = null, age = 0, nickname = "anónimo") {
    this.namme = namme;
    this.age = age;
    this.nickname = nickname;
  }
}

let dPerson = new DefaultPerson();
console.log(dPerson);

let dPerson2 = new DefaultPerson("freddy", undefined, "fred");
console.log(dPerson2);

// accediendo a las propiedades
console.log(dPerson2.namme);
console.log(dPerson2["age"]);

// modificando las propiedades
dPerson2.age = 21;
console.log(dPerson2.age);

// metodos - funciones
class Car {
  constructor(brand, line, model, type, engine, drivingModes = []) {
    this.brand = brand;
    this.line = line;
    this.model = model;
    this.typology = {
      type,
      engine,
      drivingModes,
    };
  }
  acelerar() {
    console.log("Aceleración máxima... 320Km/h");
  }
  frenar() {
    console.log("Frenando... 0Km/h");
  }
}

const car1 = new Car("audi", "S e-tron GT", 2024, "Sports", "eléctrico", [
  "comfort",
  "effyciency",
  "dynamic",
  "individual",
]);

console.log(car1);
car1.acelerar();

// propiedades privadas
class PrivatePerson {
  #bank
  constructor(namme, age, tel, bank) {
    this.namme = namme;
    this.age = age;
    this.tel = tel;
    this.#bank = bank;
  }

  pay() {
    this.#bank
  }
}

const privPerson = new PrivatePerson(
  "marco",
  42,
  "+57345698594",
  "IBMARC34589503950"
);

// console.log(privPerson.#bank) // no se puede acceder ni modificar la propiedad privada
console.log(privPerson)

// Getters y setters
class GetSetPerson {
  #namme
  #age
  #tel
  #bank
  constructor(namme, age, tel, bank) {
    this.#namme = namme
    this.#age = age
    this.#tel = tel
    this.#bank = bank
  }

  get getNamme() {
    return this.#namme
  }
  get getBank() {
    return this.#bank
  }
  set setBank(bank) {
    this.#bank = bank
  }
}

const gsPerson = new GetSetPerson('felipe', 50, 324567890, "ABCD12345")
console.log(gsPerson)
console.log(`Titular de la cuenta: ${gsPerson.getNamme}`)
console.log(`Número de cuenta inicial: ${gsPerson.getBank}`)
gsPerson.setBank = 'new EFGH67890'
console.log(`Número de cuenta actualizada: ${gsPerson.getBank}`)
