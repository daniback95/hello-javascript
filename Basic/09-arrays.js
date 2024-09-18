/* 
  Arrays:
  son estructuras de datos que permiten almacenar múltiples 
  valores bajo un solo nombre de variable. 
  Son una clase especial de objeto que proporciona métodos y propiedades
  para manipular colecciones ordenadas de datos.

  Características de los Arrays:

  1. Almacenamiento de Múltiples Valores: 
      Un array puede contener elementos de un solo tipo o de diferentes tipos,
      incluyendo números, cadenas, objetos e incluso otros arrays.
      Esto permite crear colecciones complejas y flexibles.
  2. Acceso por Índice: 
      Los elementos en un array se acceden mediante su índice,
      que comienza en 0(cero).
  3. Propiedad length:
      Cada array tiene una propiedad length que indica la cantidad
      de elementos que contiene. Esto permite conocer la longitud
      del array en cualquier momento.
  4. Métodos Incorporados: 
      Los arrays en JavaScript vienen con varios métodos útiles
      para manipular los datos, como push() para agregar elementos al final,
      pop() para eliminar el último elemento, shift() para eliminar el primer elemento,
      y unshift() para agregar elementos al inicio.
*/

/* 
  Declaración de arrays:
    Arrays lierales:  
      Es la forma más común
      const colors = []

    Contructor array:
      Se usa el constructor pero no es muy común
      const colors = new Array()

    Método array.of():
      Es un método estático del objeto Array que se utiliza para
      crear un nuevo array con un número específico de elementos.
      La característica distintiva de este método es que cada argumento
      que le pases se convertirá en un elemento del array, sin importar su tipo.
*/

/* Array literal */
const arrayVacío = [] // vacío
console.log('Literal array:', arrayVacío)
console.log('Tipo:', typeof arrayVacío)

/* Propiedad length */
console.log('Longitud de array vacío:', arrayVacío.length)

const colores = ['amarillo', 'azul', 'rojo'] // inicialización
console.log('Array colores:', colores)
console.log('Array colores longitud:', colores.length)

const diferentesTipos = ['texto', 2024, true, [1, 2, 3, 'a', 'b']]
console.log('Array diferentes tipos:', diferentesTipos)
console.log('Array diferentes tipos longitud:', diferentesTipos.length)

/* Constructor Array */
const constructorArrayVacio = new Array()
console.log('Constructor array:', constructorArrayVacio)
console.log('Constructor array longitud:', constructorArrayVacio.length)

/* 
  Con un solo argumento numérico: 
    Si se proporciona un solo argumento numérico,
    se crea un array con esa cantidad de elementos,
    pero sin ningún valor inicial asignado.
*/
const constructorArgumentoNumerico = new Array(3)
console.log('Constructor argumento numérico:', constructorArgumentoNumerico)
console.log('Constructor argumento numérico longiud:', constructorArgumentoNumerico.length)

/* 
  Con múltiples argumentos: 
    Si se proporcionan múltiples argumentos,
    cada uno de ellos se convierte en un elemento del array.
*/
const constructorMultiplesArgumentos = new Array(1, 2, 3, 'piña', true)
console.log('Constructor múltiples argumentos:', constructorMultiplesArgumentos)
console.log('Constructor múltiples argumentos longitud:', constructorMultiplesArgumentos.length)

/* 
  Método array.of(): 
    cada argumento que le pases se convertirá en un elemento
    del array, sin importar su tipo
  */
const arrayOfUnicoElemento = Array.of(7)
console.log('Array of único elemento:', arrayOfUnicoElemento)
const arrayOfMulitplesElementos = ['Jośe', 33, true, null]
console.log('Array of múliples elementos:', arrayOfMulitplesElementos)

/* 
  Acceso a elementos:
    Para acceder a un elemento específico de un array, utilizamos su índice.
    El índice es un número que indica la posición de un elemento
    dentro del array, y siempre comienza desde 0.
*/
console.log('Color específico:', colores[1])
console.log('Elemento specífico:', diferentesTipos[2])
console.log('Elemento specífico:', diferentesTipos[3])
console.log('Elemento specífico:', diferentesTipos[3][3])
console.log('Elemento specífico constructor:', constructorMultiplesArgumentos[2])
