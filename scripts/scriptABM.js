
class Producto {
    constructor(nombre, apellido, direccion, telefono, estado, correo){ 
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.estado = estado
        this.correo = correo
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
    const producto = new Producto(datForm.get("nombre"),datForm.get("apellido"),datForm.get("direccion"),datForm.get("telefono"),datForm.get("estado"),datForm.get("correo"))
    productos.push(producto)
    localStorage.setItem("productosStorage", JSON.stringify(productos))
    
    Swal.fire({
        icon: 'success',
        title:`Se agregó el cliente: "${producto.nombre} ${producto.apellido}" con éxito.`,
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
                            <h5 class="card-title">Nombre: ${producto.nombre} ${producto.apellido}</h5>
                            <p class="card-text index__pcards">Direccion del cliente: ${producto.direccion}</p>
                            <p class="card-text index__pcards">Correo: ${producto.correo}</p>
                            <p class="card-text index__pcards">Estado: ${producto.estado}</p>
                            <p class="card-text index__pcards">Telefono: $${producto.telefono}</p>
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
                title: `Se eliminó del storage el cliente: ${producto.nombre} ${producto.apellido}`,
                showConfirmButton: false,
                timer: 1500,
            })
        })

    })
})





