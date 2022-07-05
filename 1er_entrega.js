let nombreCliente = prompt("Ingrese su nombre")
console.log("Bienvenido a nuestra Tienda de Dulces Boutique: "+nombreCliente+". Por favor siga los pasos que indicará la consola")

class ProductoReposteria {
    constructor(nombre, tipo, descripcion, precio, estado, stock){ 
        this.nombre = nombre
        this.descripcion = descripcion
        this.tipo = tipo
        this.precio = precio
        this.estado = estado
        this.stock = stock
    }

    disminuirStock(numeroStock = 0){
        this.stock -= numeroStock
    }
    aumentarStock(numeroStock = 0){
        this.stock += numeroStock
    }
}

console.log("A continuación se mostrarán los productos disponibles en el ecommerce:")

const producto1 = new ProductoReposteria("brownie", "Brownie con dulce de leche", "Dulce", 190, "Activo", 10)
const producto2 = new ProductoReposteria("cookies", "Cookies con chips", "Dulce", 90, "Activo", 12)
const producto3 = new ProductoReposteria("empanadas", "Empanada de carne", "Salado", 120, "Activo", 24)
const producto4 = new ProductoReposteria("cheese cake", "Cheese Cake salado", "Salado", 1200, "Activo", 5)
const producto5 = new ProductoReposteria(0, 0, 0, 0, 0, 0) // lo agregué de comodín para que no falle el ultimo find

const todosProductos = [producto1, producto2, producto3, producto4, producto5]
console.table(todosProductos)

const nombreProductos = todosProductos.map(nombres => nombres = nombres.nombre)
console.log(nombreProductos)

let seleccion1 = 0
let seleccion2 = 0
let seleccion3 = 0
let seleccion4 = 0

seleccion1 = prompt("Ingrese el nombre de un producto deseado (posibles:"+nombreProductos+")").toLocaleLowerCase()
console.log("Seleccionó: "+seleccion1)
let continuar = prompt("Desea seleccionar otro? Ingrese SI o NO").toLocaleLowerCase()
if (continuar === "si") {
    seleccion2 = prompt("Ingrese el nombre de un producto deseado (posibles:"+nombreProductos+")").toLocaleLowerCase()
    console.log("Seleccionó: "+seleccion1+" y "+seleccion2)
    continuar = prompt("Desea seleccionar otro? Ingrese SI o NO").toLocaleLowerCase()
    if (continuar === "si") {
        seleccion3 = prompt("Ingrese el nombre de un producto deseado (posibles:"+nombreProductos+")").toLocaleLowerCase()
        console.log("Seleccionó: "+seleccion1+" y "+seleccion2+" y "+seleccion3)
        continuar = prompt("Desea seleccionar otro? Ingrese SI o NO").toLocaleLowerCase()
        if (continuar ==="si") {
            seleccion4 = prompt("Ingrese el nombre de un producto deseado (posibles:"+nombreProductos+")").toLocaleLowerCase()
            console.log("Seleccionó: "+seleccion1+" y "+seleccion2+" y "+seleccion3+" y "+seleccion4)
        } else {
            
        }
    }
} 

let auxCompra1 = todosProductos.find(precio => precio.nombre === seleccion1)
let auxCompra2 = todosProductos.find(precio => precio.nombre === seleccion2)
let auxCompra3 = todosProductos.find(precio => precio.nombre === seleccion3)
let auxCompra4 = todosProductos.find(precio => precio.nombre === seleccion4)

let precioTotal = auxCompra1.precio+auxCompra2.precio+auxCompra3.precio+auxCompra4.precio
alert("El precio total de su carrito sin IVA es de: $"+precioTotal)
console.log("El precio total de su carrito sin IVA es de: $"+precioTotal)

const IVA = 1.21

function IVA2(precio1) {
    return Math.round(precio1*IVA)
}

console.log("El precio total de su carrito CON IVA, y redondeado es de: $"+IVA2(precioTotal))

switch(seleccion1) {
    case "brownie":
        producto1.disminuirStock(1)
        break
    case "cookies":
        producto2.disminuirStock(1)
        break
    case "empanadas":
        producto3.disminuirStock(1)
        break
    case "cheese cake":
        producto4.disminuirStock(1)
        break
    default: 
        console.log("Se selecciono un producto errado, no se descuenta stock")
}
switch(seleccion2) {
    case "brownie":
        producto1.disminuirStock(1)
        break
    case "cookies":
        producto2.disminuirStock(1)
        break
    case "empanadas":
        producto3.disminuirStock(1)
        break
    case "cheese cake":
        producto4.disminuirStock(1)
        break
    default: 
        console.log("Se selecciono un producto errado, no se descuenta stock")
}
switch(seleccion3) {
    case "brownie":
        producto1.disminuirStock(1)
        break
    case "cookies":
        producto2.disminuirStock(1)
        break
    case "empanadas":
        producto3.disminuirStock(1)
        break
    case "cheese cake":
        producto4.disminuirStock(1)
        break
    default: 
        console.log("Se selecciono un producto errado, no se descuenta stock")
}
switch(seleccion4) {
    case "brownie":
        producto1.disminuirStock(1)
        break
    case "cookies":
        producto2.disminuirStock(1)
        break
    case "empanadas":
        producto3.disminuirStock(1)
        break
    case "cheese cake":
        producto4.disminuirStock(1)
        break
    default: 
        console.log("Se selecciono un producto errado, no se descuenta stock")
}

console.log("El Stock fue actualizado, STOCK ACTUAL:")
console.table(todosProductos)
