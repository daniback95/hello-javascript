/* 
  Variables

  Una variable es un espacio en memoria que tiene un nombre y se usa para
  almacenar un valor. En esencia, es una 'caja' con un nombre/identificador
  en la que se puede almacenar cualquier tipo de valor. Este valor puede ser 
  un dato primitivo (como números y cadenas) o un tipo de dato compuesto 
  (como arrays y objetos).

  Valores por valor:
    - Si una variable almacena un tipo de dato primitivo, ésta almacena 
      directamente el valor en la variable. Al acceder a la variable, se
      accede directamente a su valor.
  
  Valores por referencia:
    - Si una variable almacena un tipo de dato compuesto (como objetos o arrays),
      esta almacena una referencia a su ubicación en la memoria en lugar del 
      contenido completo del objeto o array. Modificar el contenido a través 
      de esta referencia afectará a todas las variables que referencian el 
      mismo objeto o array.

  Tipos de variables:
    - var:  Es la forma tradicional de declarar variables en JavaScript. 
            Tiene un alcance de función o global.
    - let:  Fue introducido en ES6 (ECMAScript 2015).
            Tiene un alcance de bloque.
            Permite la reasignación.
    - const:  También fue introducido en ES6. 
              Se utiliza para declarar variables constantes 
              (valores que no pueden ser reasignados). 
              Tiene un alcance de bloque.

  Hoisting(Elevación):
    JavaScript tiene un comportamiento llamado "elevación" (hoisting),
    Cuando se declara una variable utilizando var,
    la declaración se "eleva" al inicio de su contexto de ejecución
    (ya sea una función o el ámbito global). 
    Sin embargo, solo la declaración se eleva, no la inicialización.
    Esto significa que si intentas acceder a la variable antes de su declaración,
    obtendrás undefined en lugar de un error.

    Las varialbes declaradas con let y const, también son elevadas,
    pero tienen un comportamiento diferente.
    Las variables declaradas con let y const no pueden ser utilizadas
    antes de su declaración debido a lo que se llama la "Temporal Dead Zone" (zona muerta temporal).
    Si intentas acceder a una variable let o const antes de su declaración,
    obtendrás un ReferenceError.
*/

/* Var: no se recomienda su uso*/

var saludo; // Declaración de la variable
saludo = "Hola JavaScript"; // Inicialización de la variable
console.log(saludo);

var saludo2 = "JavaScript es increible"; // Declaración e inicialización en la misma línea
console.log(saludo2);
saludo2 = 2024; // Reasignación
console.log(saludo2);

var saludo = "Brendan" // Var permite la redeclaración de una varible
console.log(saludo)

/* Hoisting con var */
console.log(x); // Se eleva la declarión pero no su asignación: undefineds
var x = 5; // se aplica la asignación
console.log(x); // Se accede a su asignación

/* let: la forma mas recomendada para declarar variables */

let nombre = "Juan"; // Declaración y asignación
console.log(nombre);

nombre = "Sofi"; // Reasignación
console.log(nombre);

// let nombre = 9 // let no permite la redeclaración: SyntaxError: Identifier 'nombre' has already been declared

/* Hoisting con let */
// console.log(y) // se eleva pero no se le asigna valor predeterminado: ReferenceError: Cannot access 'y' before initialization
let y = 3 // Declaración y asignación
console.log(y)

/* 
  Constantes
  Las constantes en JavaScript son variables cuyo valor
  no puede ser cambiado una vez que han sido asignadas.
  Se declaran utilizando la palabra clave const, y son útiles para almacenar
  valores que no deben ser modificados a lo largo del tiempo,
  como números matemáticos, configuraciones de aplicación,
  o cualquier otro dato que se espera que permanezca constante.
*/

/* 
  Declaracion 
  const NOMBRE_CONSTANTE = valorInicial;  
  Por convención, el identificador se escriben en mayúsculas
  y con guiones bajos (SNAKE_CASE)
*/

const PI = 3.1416

// Características de las constantes
/* 
  Inmutabilidad: Una vez que se asigna un valor a una constante, 
  no se puede cambiar. Intentar reasignar un valor a una constante 
  resultará en un error de tipo TypeError.
*/
const MAX_VALUE = 100
// MAX_VALUE = 150 // TypeError: Assignment to constant variable.

/* 
  No se pueden redeclarar: No puedes declarar una constante con 
  el mismo nombre en el mismo ámbito. 
  Esto generará un error de sintaxis.
*/

const NAME = "Alice";
//const NAME = "Bob"; // SyntaxError: Identifier 'NAME' has already been declared.

/* 
  Inicialización obligatoria: Las constantes deben ser inicializadas 
  en el momento de su declaración. 
  No puedes declarar una constante sin asignarle un valor.
*/

// const EMPTY; // SyntaxError: Missing initializer in const declaration

/* 
  Ámbito de bloque: Las constantes tienen un ámbito de bloque,
  lo que significa que solo son accesibles dentro del bloque donde se declaran,
  similar a las variables declaradas con let.
*/

{
  const LOCAL_CONST = "Estoy en un ambiente local"
  console.log(LOCAL_CONST)
}

// console.log(LOCAL_CONST) // ReferenceError: LOCAL_CONST is not defined, no se encuentra en el ambito global

/* 
  Modificación de objetos y arreglos declarados como constantes

  Cuando declaras una constante que almacena un objeto o un arreglo,
  lo que realmente estás haciendo es crear una referencia constante
  a ese objeto o arreglo en la memoria.
  Esto significa que no puedes cambiar la referencia de la constante
  para que apunte a un nuevo objeto o arreglo, pero sí puedes modificar
  las propiedades del objeto o los elementos del arreglo.
*/

const PERSON = { // se declara un objeto como constate
  nombre: 'Peter',
  edad: 27
}
console.log(PERSON)

PERSON.nombre = 'Ned' // Esto es válido
console.log(PERSON)

PERSON.estudiante = true // También valido
console.log(PERSON)

// PERSON = { nombre: 'Stark' } // Se intenta reaginar el objeto, esto causa un error: TypeError: Assignment to constant variable
// console.log(PERSON)

/* 
  En este caso, PERSON es una constante que apunta a un objeto en la memoria.
  Puedes modificar el contenido del objeto (como cambiar el valor de nombre),
  pero no puedes hacer que PERSON apunte a un objeto diferente.
*/