class Producto {
    constructor(nombre, descripcion, tipo, precio, estado, stock){ 
        this.nombre = nombre
        this.descripcion = descripcion
        this.tipo = tipo
        this.precio = precio
        this.estado = estado
        this.stock = stock
    }
}

let productos = []

if(localStorage.getItem("productosStorage")) {
    productos = JSON.parse(localStorage.getItem("productosStorage"))
} else {
    localStorage.setItem("productosStorage", JSON.stringify(productos))
}

const form = document.getElementById("idForm")
const botonMostrar = document.getElementById("botonMostrar")
const divProductos = document.getElementById("divProductos")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target) // obtener datos con name de formularios
    const producto = new Producto(datForm.get("nombre"),datForm.get("descripcion"),datForm.get("tipo"),datForm.get("precio"),datForm.get("estado"),datForm.get("stock"))
    productos.push(producto)
    localStorage.setItem("productosStorage", JSON.stringify(productos))
    form.reset()
})

botonMostrar.addEventListener("click", () => {
    let productosStorage = JSON.parse(localStorage.getItem("productosStorage"))
    divProductos.innerHTML = ""
    productosStorage.forEach((producto, indice) => {
        divProductos.innerHTML += `
            
            <div class="card border-info" id="producto${indice}" style="max-width: 20rem;margin:4px;">
                <div class="card-header">Información de producto</div>
                <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Tipo de producto: ${producto.tipo}</p>
                    <p class="card-text">Cantidad de stock: ${producto.stock}</p>
                    <p class="card-text">Estado: ${producto.estado}</p>
                    <p class="card-text" style="color: grey;">Precio: $${producto.precio}</p>
                </div>
                <button class="btn btn-danger">Eliminar producto</button>
            </div>
            
        
        `
        
    });
    
    productosStorage.forEach((producto, indice) => {
        document.getElementById(`producto${indice}`).lastElementChild.addEventListener("click", () => {
            alert(`Se eliminó el producto: ${producto.nombre}`)
            document.getElementById(`producto${indice}`).remove() // Eliminar del DOM
            productos.splice(indice, 1) // eliminar del array
            localStorage.setItem("productosStorage", JSON.stringify(productos))
            console.log(productos)
        })

    })
})





