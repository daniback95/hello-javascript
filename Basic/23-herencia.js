// Herencia
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sonido() {
    console.log("El animal emite un sonido genérico");
  }
}

class Perro extends Animal {
  run() {
    console.log("El perro corre");
  }
  
  sonido() {
    console.log('wauf wauf waufff')
  }
}

class Pez extends Animal {
  constructor(nombre, tamanio) {
    super(nombre);
    this.tamanio = tamanio;
  }

  nadar() {
    console.log("El pez está nadando");
  }
}

let perro1 = new Perro("Firulais");
console.log(perro1.nombre);
perro1.sonido();
perro1.run();

let pez1 = new Pez("Dori", 'pequeño');
console.log(pez1.nombre);
console.log('El tamaño del pez es:', pez1.tamanio)
pez1.nadar();
pez1.sonido();

// Métodos estáticos
class OperacionesMath {
  static suma(a, b) {
    return a + b
  }
}

console.log('Resutado de la suma:', OperacionesMath.suma(3, 6))