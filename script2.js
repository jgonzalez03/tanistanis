/* CLASE CICLOS FOR */

for(let i = 0; i <= 1000; i++ ) { // (i = i + 1) = (i++) // for ((se declara la variable);(se declara la condicion);(se declara como se incrementa))

    if( i === 50){
        break
    }
    
    if( i === 7){  /* Se saltea en esta condición, saltea lo siguiente que está abajo*/
        continue
    }
    console.log(i)
    console.log("hola")

    /* numero primos, son divisibles entre si mismo y entre 1, con resto 0 */
}

/* CLASE CICLOS WHILE */ // Se ejecuta cero o mas veces, con una condición para que se de

/* let repetirWhile = true
let numero1While, numero2While

while(repetirWhile){
    numero1While = parseFloat(prompt("WHILE Ingrese un numero"))
    numero2While = parseFloat(prompt("WHILE Ingrese otro numero"))

    if((!isNaN(numero1While)) && (!isNaN(numero2While))){
        repetirWhile = false
    }
}

console.log(numero1While)
console.log(numero2While) */

/* CLASE CICLOS DO WHILE se ejecuta una vez siempre, ejecuta y despues consulta SE APLICA VAR dentro del sitio */

/* do {
    var palabraDoWhile = prompt("Ingrese palabra, salir, para salir").toLowerCase() // todo a minuscula para comparar
} while(palabraDoWhile != "salir") {

} */

/* CALCULADORA */

/* let numeroCalculadora1, numeroCalculadora2, operacion

do { 
    numeroCalculadora1 =  parseFloat(prompt("Ingrese un número"))
    numeroCalculadora2 =  parseFloat(prompt("Ingrese otro número"))
    operacion = prompt("Ingrese la operacion= (+,-,/,*)")

} while ((isNaN(numeroCalculadora1) || isNaN(numeroCalculadora2)))

switch(operacion) {
    case "+":
        console.log (numeroCalculadora1 + numeroCalculadora2)
        break
    case "*":
        console.log (numeroCalculadora1 * numeroCalculadora2)
        break
    case "/":
        console.log (numeroCalculadora1 / numeroCalculadora2)
        break
    case "-":
        console.log (numeroCalculadora1 - numeroCalculadora2)
        break
    default: 
        console.log("Operacion no valida")

} */


/* Funciones */

const IVA = 1.21

function IVA2(precio1) {
    return precio1*IVA
    }

let precio1 = parseFloat(prompt("Igrese precio a sumar iva"))
precio1 = IVA2(precio1)
console.log("El precio con iva es: "+precio1)

// Funcion flecha

const sumar = (num1, num2) => num1 + num2

const restar = (num1, num2) => {
    return num1 - num2
    console.log("Hola")
} 


/* OBJECTOS  */

let persona ={
    nombre: "Juan",
    apellido: "Gonzalez",
    edad: 26,
    peso: 94
}

console.log(persona)
console.log(persona.edad)
persona.edad = 27
console.log(persona.edad)


// Funciones constructoras // No es necesario agregar "param" puede ser el mismo nombre que la variable

/* function Producto(nombreParam, tipoParam, descripcionParam, costoParam, estadoParam = "Activo") {
    this.nombre = nombreParam
    this.tipo = tipoParam
    this.descripcion = descripcionParam
    this.costo = costoParam
    this.estado = estadoParam
    this.nombreProducto = () => console.log("Hola, el producto que seleccionaste es: " + this.nombre)
}

const producto1 = new Producto("Samsung 43", "TV", "Televisor Samsung", 300, "Inactivo")
const producto2 = new Producto("Iphone 13 Pro Max", "Celularess", "Celular Apple", 1500)

console.log(producto1)
console.log(producto2)

producto1.nombreProducto()
producto2.nombreProducto() */


// Crear objetos con Clases (lo nuevo se hace con esto, lo viejo con funciones)

class Producto {
    constructor(nombre, tipo, descripcion, costo, estado, stock){ 
        this.nombre = nombre
        this.tipo = tipo
        this.descripcion = descripcion
        this.costo = costo
        this.estado = estado
        this.stock = stock
    }

    aumentarPrecio(porcentajeAumento = 1){
        this.costo *= porcentajeAumento
        /* this.precio = this.precio * porcentajeAumento */ /* Esto es igual al de arriba, pero abreviado */
    }

    disminuirStock(numeroStock = 0){
        this.stock -= numeroStock
    }
    aumentarStock(numeroStock = 0){
        this.stock += numeroStock
    }

}

const producto1 = new Producto("Samsung 43", "TV", "Televisor Samsung", 300, "Inactivo", 10)
const producto2 = new Producto("Iphone 12", "Celulares", "Celular Apple", 1500, "Activo", 2)
const producto3 = new Producto("Iphone 11 Pro Max", "Celulares", "Celular Apple", 1800, "Activo", 2)
const producto4 = new Producto("Iphone 115 Pro Max", "Celulares", "Celular Apple", 1900, "Activo", 2)

console.log(producto1)
console.log(producto2)

producto1.aumentarPrecio(1.20)
producto2.aumentarPrecio(1.50)

console.log(producto1)
console.log(producto2)

producto1.disminuirStock(1)
producto2.disminuirStock(1)

console.log(producto1)
console.log(producto2)


/* ARRAYS */


const cosas = [1,2,3,4,5,6,7,"hola", "un dos tres", true]
const sinNada = [] // ejemplo carrito, cargo después

console.log(cosas)
console.log(cosas[7]) // Consultar una posicion
cosas[7] = "Chau" // reemplazar un dato en una posicion
console.log(cosas[7])
console.log(cosas)

for (let i = 0; i<cosas.length; i++ ) { // para recorrer cada valor, y poder mostrarlo como result
    console.log(cosas[i])
    
}

console.table(cosas) // con forma de tabla

console.log(sinNada)
sinNada.push("Calefactor")
sinNada.push("Celular Apple")
sinNada.push("Abrazo")
console.log(sinNada)
sinNada.unshift("buzo") // manda al principio del array
console.log(sinNada)

/* sinNada.pop() // elimina ultimo item
sinNada.unshift() */ // elimina primer item

sinNada.splice(2,1) // elimine el indice del celular del apple y el segundo cantidad de elementos a eliminar despues de ese
console.log(sinNada)    

let nombreEliminar = prompt("ingrese nombre a liminar").toLocaleLowerCase()
let indice = sinNada.indexOf(nombreEliminar) // index o -1 si no lo encuentra

if (indice >= 0){
    sinNada.splice(indice,1)

}else {
    alert("no encontro producto")
}

console.log(sinNada)
console.log(sinNada.join(",")) // para devolver un string, no se usa mucho

const concatenar = sinNada.concat(cosas)
console.log(concatenar)

// concatenar.slice(2,5) // copia algunos elementos del array

console.log(concatenar.includes("buzo")) // si está devuelve true
console.log(concatenar.reverse()) // cambia el indice y orden de los array.. (ejemplo para mayor y menor precio)

const productosArray = [producto1, producto2, producto3, producto4]
console.table(productosArray)

for(let vistaArray of productosArray) { // forma de recorrer el array por objetos
    console.log(vistaArray)
}


// Como hacer que en una funcion pidas y ejecutes

function mostrarReceta(ingrediente1, ingrediente2, ingrediente3) {
    console.log("El primer ingrediente es "+ingrediente1+" y deben usarse 500gr")
    console.log("El segundo ingrediente es "+ingrediente2+" y deben usarse 260gr")
    console.log("El tercer ingrediente es "+ingrediente3+" y deben usarse 100gr")
}

mostrarReceta(prompt("Ingrese ingrediente 1"),prompt("Ingrese ingrediente 2"),prompt("Ingrese ingrediente 3"),)

class Animal {
    constructor(id, nombre, especie, color, peso){
        this.id = id
        this.nombre = nombre
        this.especie = especie
        this.color = color
        this.peso = peso
    }
}

const animal1 = new Animal(1, "Firulais", "Lobo", "Gris", 60)
const animal2 = new Animal(2, "Flipper", "Delfin", "Negro", 600)
const animal3 = new Animal(3, "Leoncito", "Leon", "Amarillo", 150)
const animal4 = new Animal(4, "Rulo", "oso", "Marron", 300)
const animal5 = new Animal(5, "Manuelita", "Tortuga", "Verde", 20)
const animal6 = new Animal(6, "Box Bunny", "Conejo", "Gris", 12)

const animales = [animal1, animal2, animal3, animal4, animal5, animal6]

animales.forEach( (animal, indice) => {
    console.log(indice)
    console.log(animal)
})

console.log(animales.find(animal => animal.nombre === "Box Bunny")) // buscar por un tipo de, exacto. Devuelve solo un objeto que cumpla con la condicion.
console.log(animales.filter(animal => animal.peso > 60)) //devuelve todos mayores LAS VARIABLES SON LOCALES; SE PUEDE PONER CUALQUIER NOMBRE

console.log(animales.some(esto => esto.nombre === "Firulais")) // devuelve un true or false



