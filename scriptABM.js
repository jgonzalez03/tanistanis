
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
    
    Swal.fire({
        icon: 'success',
        title:`Se agregó el producto con éxito: ${producto.nombre}`,
        showConfirmButton: false,
        timer: 3500,
    })
    
    form.reset()
})

botonMostrar.addEventListener("click", () => {
    let productosStorage = JSON.parse(localStorage.getItem("productosStorage"))
    divProductos.innerHTML = ""
    productosStorage.forEach((producto, indice) => {
        divProductos.innerHTML += `

            <div id="producto${indice}">
                <div>
                    <div class="card index__card">
                        <div class="card-body">
                            <h5 class="card-title">Producto: ${producto.nombre}</h5>
                            <p class="card-text index__pcards">${producto.descripcion}</p>
                            <p class="card-text index__pcards">Tipo de producto: ${producto.tipo}</p>
                            <p class="card-text index__pcards">Cantidad de stock: ${producto.stock}</p>
                            <p class="card-text index__pcards">Estado: ${producto.estado}</p>
                            <p class="card-text index__pcards">Precio: $${producto.precio}</p>
                        </div>  
                        <button class="btn btn-danger">Eliminar producto</button>
                    </div>
                    
                </div>
            </div>
        `
        
    });
    
    productosStorage.forEach((producto, indice) => {
        document.getElementById(`producto${indice}`).lastElementChild.addEventListener("click", () => {
            /* alert(`Se eliminó el producto: ${producto.nombre}`) */
            document.getElementById(`producto${indice}`).remove() // Eliminar del DOM
            productos.splice(indice, 1) // eliminar del array
            localStorage.setItem("productosStorage", JSON.stringify(productos))
            
            Swal.fire({
                icon: 'warning',
                title: `Se eliminó del storage el producto: ${producto.nombre}`,
                showConfirmButton: false,
                timer: 1500,
            })
        })

    })
})





