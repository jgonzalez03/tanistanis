var nombre = "Juan" // String 
var apellido = "Gonzalez" // String
var nombreApellido = "Juan Gonzalez" // String

var edad = 26 // number, va sin comillas
var esProfesor = false // boolean T/F
var sueldo = null // vacio, no hay ningun valor guardado, pero está. ( se guarda en memoria, pero vacio)
var precioArroz = undefined // no es vacio, pq no es null, pero no está definido qué tipo de dato. 

console.log(nombreApellido)
console.log(esProfesor)
console.log(edad) // muestra en la consola los valores
alert("hola como están, tengo " +edad+" años") // mostrar mensajes en alertas

let nombreLet = "Juan Pablo" // usar let, pq no redeclara cada variable
let edadLet = 38

console.log(nombreLet+" "+edadLet)
edadLet = 26 // Asi se modifican loos valores de las variables
console.log(edadLet)

const IVA = 1.21 // Variable constante, que no se puede modificar

precioArroz = 54 // cambié el valor de la variable
console.log("Precio de arroz sin iva = "+precioArroz)
console.log("Precio de arroz con iva = "+precioArroz*IVA)
console.log("En las noticias comentaron una baja de 10% en el precio del arroz")
precioArroz= 54*0.9
console.log("Nuevo precio del arroz = "+precioArroz)

let numero = 5

if (numero == 5){ 
    console.log("Numero es igual a 5")
} else {
    console.log("no")
} 

let numeroUsuario = prompt("Ingrese un número (sin restriccion puede ser string)") // Permite que ingrese información un usuario
console.log("El número que ingresaste es el: "+numeroUsuario)
let numeroUsuario2 = parseFloat(prompt("Ingrese un número (con restriccion, solo numeros con coma)")) // El parseFloat hace que solo se pueda ingresar numeros
console.log("El número que ingresaste es el: "+numeroUsuario2)
console.log("El numero que ingresaste multiplicado por el IVA: "+numeroUsuario2*IVA)
let numeroUsuario3 = parseInt(prompt("Ingrese un numero, se redondeará la coma.")) // parseInt redondea a numero entero
console.log("El número que ingreso fue redondeado a: "+numeroUsuario3)

if(numeroUsuario3 % 2 == 0){ // El resto de los números PAR, dan siempre 0, por lo cual se hace el módulo de 2, y tiene que dar 0
    console.log("El número ingresado: "+numeroUsuario3+" es un número PAR")
} else {
    console.log("El número ingresado: "+numeroUsuario3+" es un número IMPAR")
}

let desayuno = prompt("Ingresar que desayuno quiere: Te, Cafe o Chocolate")

if (desayuno == "cafe") { // para numero y demas ---> diferente != // estrictamente diferente !== // menor< // mayor> // menorigual<= // mayorigual>= // igual== // igualParaNuumericoeSTING === (== compara valores 5 es igual a "5", === compara valor y tipo 5 es diferente a "5")
    console.log("Eligió para el desayuno Cafe")
} else if (desayuno == "te") {
    console.log("Eligió para el desayuno Te")
} else if (desayuno == "chocolate"){
    console.log("Eligió para el desayuno Chocolatada")
} else {
    console.log("No seleccionó ninguna opción correcta")
}

// se pueden definir variables para hacer IFs que queden con el dato. Se usa para cuando la consulta del dato está muy arriba en el código.


let desayuno2 = prompt("Ingresar que desayuno quiere: Te, Cafe o Chocolate")
let esChocolate =(desayuno2 == "chocolate")
let esCafe =(desayuno2 == "cafe")
let esTe =(desayuno2 == "te")

if (esCafe) {
    console.log("Eligió para el desayuno Cafe")
} else if (esTe) {
    console.log("Eligió para el desayuno Te")
} else if (esChocolate){
    console.log("Eligió para el desayuno Chocolatada")
} else {
    console.log("No seleccionó ninguna opción correcta")
}

// OPERADORES 
// And &&
// OR ||

let numero1 = 10
let numero2 = 20

if (numero1 === 10 && numero2 === 20) {
    console.log("El numero1 es 10 y el numero2 es 20")
} else {
    console.log("no se cumple la condicion")
}

if (numero1 === 10 || numero2 === 25) {
    console.log("El numero1 es: "+numero1+" y el numero2 es:"+numero2)
} else {
    console.log("no se cumple la condicion")
}


