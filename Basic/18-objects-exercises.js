// 1. Crea un objeto con 3 propiedades
const usuario = {
  nombre: 'David',
  profesion: 'Administrador de empresas',
  email: 'david@gmail.com',
}
// 2. Accede y muestra su valor
console.log(usuario.nombre)
console.log(usuario.profesion)
console.log(usuario.email)
// 3. Agrega una nueva propiedad
usuario.ciudad = 'Medellín'
console.log(usuario)
// 4. Elimina una de las 3 primeras propiedades
delete usuario.profesion
console.log(usuario)
// 5. Agrega una función e invócala
usuario.saludar = function(){
  console.log(`Hola que tal, mi nombre es ${this.nombre}`)
}

usuario.saludar()
// 6. Itera las propiedades del objeto
for (const key in usuario) {
  console.log(`${key}: ${usuario[key]}`)
}
// 7. Crea un objeto anidado
usuario.trabajo = {
  empresa: 'Nu Bank',
  cargo: 'gerente',
  ubicacion: {
    pais: 'Brasil', 
    ciudad: 'Sao Paulo'
  }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(usuario.trabajo)
console.log(usuario.trabajo.ubicacion.pais)

// 9. Comprueba si los dos objetos creados son iguales
console.log(usuario === usuario.trabajo)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(usuario.nombre === usuario.trabajo.empresa)