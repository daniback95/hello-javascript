// 1. Usa desestructuración para extraer los dos primeros elementos de un array
const colores = ["amarillo", "azul", "rojo"];
let [color1, color2] = colores;
console.log(color1);
console.log(color2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
const numbers = [1, 2, 3, 4];
let [a, b, c, d, e = "sin asignar"] = numbers;
console.log(e);

// 3. Usa desestructuración para extraer dos propiedades de un objeto
const usuario = {
  nombre: "David",
  profesion: "Administrador de empresas",
  email: "david@gmail.com",
  trabajo: {
    empresa: "Nu Bank",
    cargo: "gerente",
    ubicacion: {
      pais: "Brasil",
      ciudad: "Sao Paulo",
    },
  },
};
const { nombre, profesion, ...restObj } = usuario;
console.log(nombre);
console.log(profesion);
console.log(restObj);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
const { nombre: nomUser, email: mailUser } = usuario;
console.log(nomUser);
console.log(mailUser);

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
const {
  trabajo: { empresa, ubicacion: geo },
} = usuario;
console.log(empresa);
console.log(geo);

// 6. Usa propagación para combinar dos arrays en uno nuevo
const arrayCombinado = [...colores, ...numbers];
console.log(arrayCombinado);
// 7. Usa propagación para crear una copia de un array
const copyArray = [...colores];
console.log(copyArray);
// 8. Usa propagación para combinar dos objetos en uno nuevo
const carro = {
  marca: "ford",
  modelo: 2024,
};
const motor = {
  type: "V",
  cilindros: 8,
  cilindraje: 3.5,
};

const myCar = {
  ...carro,
  ...motor,
};

console.log(myCar);
// 9. Usa propagación para crear una copia de un objeto
const copyMotor = { ...motor };
console.log(copyMotor);

// 10. Combina desestructuración y propagación
const { marca, ...restCar } = myCar;
console.log(marca, restCar);
const newCar = {
  ...restCar,
  marca: "audi",
};
console.log(newCar)
