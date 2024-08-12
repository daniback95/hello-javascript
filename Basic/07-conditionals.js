// if
let adulthood = 18;
let age = 24;

if (age >= adulthood) {
  console.log("Puede ingresar");
}

// if else
age = 14;
if (age >= adulthood) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// if  else, else if
// age = 12
if (age >= adulthood) {
  console.log("Es un adulto, puede ingresar");
} else if (age < adulthood && age >= 14) {
  console.log(
    "Es menor de edad, sólo puede ingresar con permiso de sus padres "
  );
} else {
  console.log("Es menor de 14, definitivamente no puede ingresar");
}

// Operador ternario
let ageGroup = age >= adulthood ? "Adulto" : "Menor de edad";
console.log(ageGroup);

// Switch 
let day = 1
let dayName = null

switch (day) {
  case 1:
    dayName = "Domingo"
    break
  case 2:
    dayName = "Lunes"
    break
  case 3:
    dayName = "Martes"
    break
  case 4:
    dayName = "Miércoles"
    break
  case 5:
    dayName = "Jueves"
    break
  case 6:
    dayName = "Viernes"
    break
  case 7:
    dayName = "Sábado"
    break
  default:
    dayName = "Número de día incorrecto"
}
console.log(dayName)
