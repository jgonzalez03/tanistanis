/* console.log(document.getElementById("Esto"))
console.log(document.getElementsByClassName("segundoTituloPrueba")) */

/* class ProductoReposteriaB {
    constructor(nombre, tipo, descripcion, precio, estado, stock){ 
        this.nombre = nombre
        this.descripcion = descripcion
        this.tipo = tipo
        this.precio = precio
        this.estado = estado
        this.stock = stock
    }
}


const productoA = new ProductoReposteriaB("brownie", "Brownie con dulce de leche", "Dulce", 190, "Activo", 10)
const productoB = new ProductoReposteriaB("cookies", "Cookies con chips", "Dulce", 90, "Activo", 12)
const productoC = new ProductoReposteriaB("empanadas", "Empanada de carne", "Salado", 120, "Activo", 24)
const productoD = new ProductoReposteriaB("cheese cake", "Cheese Cake salado", "Salado", 1200, "Activo", 5)
const productoE = new ProductoReposteriaB(0, 0, 0, 0, 0, 0)

const productosB = [productoA, productoB, productoC, productoD, productoE]

const mosProductos = document.getElementById("mosProductos")


productosB.forEach(producto => {
    mosProductos.innerHTML += `
    <div class="footer">
    <p>Nombre: ${producto.nombre} </p>
    <p>Nombre: ${producto.descripcion} </p>
    <p>Nombre: ${producto.tipo} </p>
    <p>Nombre: ${producto.precio} </p>
    <p>Nombre: ${producto.estado} </p>
    <p>Nombre: ${producto.stock} </p>
    </div>  
    `
}); */


const boton1 = document.getElementById("boton1")
const input1 = document.getElementById("input1")

boton1.addEventListener("click", () => {
    console.log("Hola coders")
})

input1.addEventListener("input", () => {

    console.log(input1.value)

})




/* const agregarParrafo = document.createElement("p")
agregarParrafo.innerText= "Hola Mundo"
agregarParrafo.id = "parrafo1"

document.body.append(agregarParrafo) */ /* OTRA MANERA DE AGREGAR AL HTML */

/* const productoPrueba = document.getElementById("productoA")
console.log(productoPrueba)

const remover = document.getElementById("productoA")
remover.remove()
 */
