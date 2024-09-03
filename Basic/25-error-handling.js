// Tratamiento de errores
let myObjetc;

try {
  console.log(myObjetc.email)
  console.log('finaliza la ejecución sin errores')
} catch {
  console.log('Error durante la ejecución sin capturar el error')
}

// Captura del error
try {
  console.log(myObjetc.email)
  console.log('finaliza la ejecución sin errores')
} catch (error) {
  console.log('Error durante la ejecución:', error.message)
}

// finally
try {
  console.log(myObjetc)
  console.log('finaliza la ejecución sin errores')
} catch (error) {
  console.log('Error durante la ejecución con finally:', error.message)
} finally {
  console.log('Fin de la ejecución sin importar si hubo o no errores')
}