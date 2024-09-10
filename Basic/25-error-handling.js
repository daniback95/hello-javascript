// Tratamiento de errores
let myObjetc;

try {
  console.log(myObjetc.email);
  console.log("finaliza la ejecución sin errores");
} catch {
  console.log("Error durante la ejecución sin capturar el error");
}

// Captura del error
try {
  console.log(myObjetc.email);
  console.log("finaliza la ejecución sin errores");
} catch (error) {
  console.log("Error durante la ejecución:", error.message);
}

// finally
try {
  console.log(myObjetc);
  console.log("finaliza la ejecución sin errores");
} catch (error) {
  console.log("Error durante la ejecución con finally:", error.message);
} finally {
  console.log("Fin de la ejecución sin importar si hubo o no errores");
}

// Lanzamiento de errores
// throw new Error('Se ha producido un error!')
function sumar(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Esta operación solo recibe números')
  }
  if (a === 0 || b === 0) {
    throw new ErrorZero('Error, está intentando sumar cero', a, b)
  }

  return a + b
}

try {
  console.log(sumar(3, 9))
  console.log(sumar(3, 'r'));
} catch (error) {
  console.log('Se ha producido un error:', error.message)
} finally {
  console.log('Fin: operación finalizada')
}

// Errores personalizados
class ErrorZero extends Error {
  constructor(message, a, b) {
    super(message)
    this.a = a
    this.b = b
  }
  get getValues(){
    return `${this.a} + ${this.b}`
  }
}

try {
  sumar(0, 5)
} catch ({message: msj, getValues: values}) {
  console.log(msj)
  console.log(values)
}