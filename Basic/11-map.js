// Map

let myMap = new Map() // declaración
console.log(myMap)
console.log(typeof myMap)

myMap = new Map([
  ['nombre', 'daniel'], 
  ['email', 'daniel@daniback95.com'],
  ['age', 24]
])
console.log(myMap)

// métodos

// set
myMap.set("alias", "daniback95") // agrega una nueva clave:valor
console.log(myMap)
myMap.set('nombre', 'Mauricio')
console.log(myMap) // actualiza el valor de la clave existente

// get
console.log(myMap.get("nombre")) // retorna el valor de la clave
console.log(myMap.get("apellido"))

// has
console.log(myMap.has("apellido")) // valida si existe la clave, retorna true o false
console.log(myMap.has("email"))

// delete

let elementReomove = myMap.delete('alias') // remueve el elemento y retorna un boolean si la clave existe o no
console.log("Elemento removido:", elementReomove)
console.log(myMap)

// porpiedad size
console.log(myMap.size) // devuelve el tamaño del map

// iteraciones sobre map

// keys
let keys = myMap.keys() // devuelve un iterador con las claves del map
console.log(myMap.has("apellido"))
console.log(keys)

// values
let values = myMap.values() // devuelve un iterador con los valores del map
console.log(values)

// entries
let entries = myMap.entries() // devueleve un iterador con la clave : valor
console.log(entries)

// clear
myMap.clear()
console.log(myMap)