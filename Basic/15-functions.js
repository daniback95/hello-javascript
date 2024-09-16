/* 
  Funciones:
    Una función es un conjunto de instrucciones que realiza una tarea o calcula un valor,
    tomando alguna entrada y devolviendo una salida.
*/

/* 
  sintaxis
    function nombre (parametro1, parametro2, ...) {
      instrucciones
      return
    }

  function: palabra clave para definir una función
  nombreFuncion: nombre de la función
  parametros: lista de parámetros separados por comas (opcional)
  instrucciones: código a ejecutar cuando se llama a la función
  return: devuelve un valor (opcional)
*/

/* Declaración de una función */

function saludar() {
  console.log("Hola desde una función");
}
saludar(); // Invocación de la función

/* 
  Parámetros y argumentos:

  - Parámetros:
    Los parámetros son las variables que se definen en la declaración de una función.
    Actúan como placeholders que recibirán valores cuando la función sea llamada.
    Los parámetros permiten que la función acepte entradas y realice operaciones con esos valores
  - Argumentos:
    Los argumentos son los valores reales que se pasan a la función cuando se llama.
    Estos valores se asignan a los parámetros correspondientes en la función.
*/

function saludarParametros(nombre, edad) {
  console.log(`Hola soy ${nombre}!, tengo ${edad} años`);
}
saludarParametros('Freddy', 37); // Aquí le pasamos los argumentos (valores)

/*
  Función con parámetros por defecto:

    Una función con parámetros por defecto en JavaScript es una función
    que permite definir valores predeterminados para ciertos parámetros.
    Esto significa que si no se proporcionan argumentos para esos parámetros
    al llamar a la función, se utilizarán los valores por defecto
    especificados en la declaración de la función.
*/

function saludarPredeterminados(nombre = 'Desconocido', edad = 0) {
  console.log(`Hola soy ${nombre}!, tengo ${edad} años`)
}
saludarPredeterminados() // Sin argumentos
saludarPredeterminados('Peper', 7) // Con ambos argumentos
saludarPredeterminados('Felipe') // Pasando solo el primer argumento
saludarPredeterminados(undefined, 15) // Omitiendo el primer argumento

/* 
  Función con Retorno de valores:

    Es el valor que una función devuelve al ser invocada.
    Este retorno se especifica mediante la palabra clave return,
    que finaliza la ejecución de la función y
    envía un valor de vuelta al contexto donde se llamó la función.

  ¿Para qué se usa el retorno de valor?:

    1.  Producción de resultados:
          Permite a las funciones calcular y devolver resultados que pueden
          ser utilizados más adelante en el código.
          Por ejemplo, una función que calcula la suma de dos números puede devolver
          ese resultado para ser utilizado en otras operaciones.

    2.  Reutilización de código:
          Al devolver valores, las funciones se vuelven más versátiles y reutilizables,
          ya que pueden ser utilizadas en diferentes contextos y con diferentes entradas.

    3.  Encadenamiento de funciones:
          Los valores devueltos pueden ser utilizados como argumentos
          para otras funciones, facilitando la creación de flujos de
          trabajo más complejos.

  Consideraciones sobre el retorno de valor:
    - Una sola salida:
        En JavaScript, una función puede devolver solo un valor.
        Sin embargo, es posible devolver múltiples valores
        empaquetándolos en un objeto o un arreglo.

    - Fin de la ejecución: 
        La instrucción return finaliza la ejecución de la función.
        Cualquier código que se encuentre después de un return
        dentro de la misma función no se ejecutará.

    - Funciones sin retorno: 
        Si una función no tiene una instrucción return,
        devuelve undefined por defecto. Esto es útil para funciones
        que realizan acciones pero no necesitan devolver un valor.
*/

function multiplicar(a, b) {
  return a * b // valor a devolver
}
let resultado = multiplicar(3, 9) // El valor retornado es asignado a una variable
console.log(`El resulado de la multiplicación es: ${resultado}`)

function mostrarMensaje(mensaje) {
  console.log(mensaje);
  // No hay return, por lo que devuelve undefined
}
let valorDeRetorno = mostrarMensaje('Mensaje para la función que no devuelve un valor')
console.log(valorDeRetorno)

/* 
  En Js hay dos maneras de declarar funciones: Funciones declaradas y funciones expresadas

  Declaraciones vs Expresiones en Programación:
    En programación, las declaraciones y las expresiones son conceptos
    fundamentales que se utilizan para crear y manipular código.
    Aunque están relacionados, tienen diferencias clave:

  Declaraciones:
    Una declaración es una instrucción que establece o declara algo.
    En el contexto de la programación, una declaración introduce un identificador
    (como una variable o una función) al ámbito actual.

  Características de las declaraciones:
    No devuelven un valor
    Pueden declarar variables, funciones, clases, etc.
    Ejemplos en JavaScript: let x;, function myFunction() { ... }, class MyClass { ... }

Expresiones:
  Una expresión es una combinación de valores, variables, operadores
  y llamadas a funciones que se evalúan para producir un valor.
  Las expresiones pueden aparecer donde se espera un valor.

Características de las expresiones:
  Siempre devuelven un valor
  Pueden incluir literales, variables, operadores y llamadas a funciones
  Ejemplos en JavaScript: 2 + 3, x * 2, myFunction(arg), let y = 4;
  
  Funciones declaradas:
    Las funciones declaradas se definen utilizando la palabra clave
    function seguida del nombre de la función y un conjunto de
    paréntesis que pueden incluir parámetros.
    Este tipo de función se eleva (hoisting) al inicio del contexto
    en el que se define, lo que significa que puedes llamar a la
    función antes de su declaración en el código

  Características:
    Hoisting:
      Puedes invocar la función antes de su declaración porque JavaScript la eleva.
    Nombre obligatorio:
      Debe tener un nombre.
    Alcance:
      Es accesible en todo el ámbito donde se declara.
*/

saludarUsuario('Sebastián') // Invocación antes de su declaración (Hoisting)
function saludarUsuario(nombre) { // función declarada
  console.log(`Hola ${nombre}`)
}
saludarUsuario('Felipe') // Invocación después de su declaración

/* 
  Funciones Expresadas:
    Las funciones expresadas (o expresiones de función) se crean
    al asignar una función anónima a una variable.
    En este caso, la función no tiene un nombre explícito
    (aunque puedes asignarle uno dentro de la propia función).
    A diferencia de las funciones declaradas,
    las funciones expresadas no son elevadas,
    por lo que no puedes llamarlas antes de su definición.

    Características:
      No hay hoisting:
        No puedes invocar la función antes de su declaración.
      Puede ser anónima:
        No es necesario que tenga un nombre.
      Se puede utilizar como argumento:
        Puede ser pasada como argumento a otras funciones
        o utilizada en contextos donde se espera una expresión.
*/

// console.log(acelerar(120)) // Error: Cannot access 'acelerar' before initialization, no Hoisting
const acelerar = function(velocidad) { // Asignación a una variable
  return `Acelerando a ${velocidad} Km/H`
}
console.log(acelerar(120)) // Invocación después de su declaración