
const divProductos = document.getElementById("divProductos")
const botonCarrito = document.getElementById("botonCarrito")
const botonCarrito2 = document.getElementById("botonCarrito2")

fetch('../scripts/json/productos.json')
.then(promesa => promesa.json())
.then(info => { 
    
    info.forEach(producto => { // Generar los productos tomando como referencia el JSON y mostrando el resultado en el DOM.
        divProductos.innerHTML += 
        `
                <div id="compra${producto.id}" class="col">
                    <div class="card index__card">
                        <img src="../resources/${producto.img_producto}" class="card-img-top" alt="Galletitas tipo cookie americana">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre_producto}</h5>
                            <p class="card-text index__pcards">${producto.descripcion_producto}</p>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
        `      
    });   
    
    
    let productos = []
    productos = info
    let seleccionCarrito = []

    productos.forEach(producto => { // capturar el click en el boton de cada producto
        document.getElementById(`compra${producto.id}`).lastElementChild.lastElementChild.lastElementChild.addEventListener('click', () => {
            
            /* console.log(`Hiciste click en el producto: ${producto.nombre_producto}`) // Realicé el comentario para ir viendo si esetaba OK la funcionalidad. */
            seleccionCarrito.push(producto.nombre_producto)
           /*  console.log(seleccionCarrito) // Realicé el comentario para ir viendo si esetaba OK la funcionalidad. */

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            
            Toast.fire({
                icon: 'success',
                title: `Se agregó ${producto.nombre_producto} al carrito`
            })

            })
        })

    botonCarrito.addEventListener("click", () => {

        /* console.log("Diste click en carrito") // Estos comentarios los fui haciendo para entender si estaba con los datos correctos.
        console.log(seleccionCarrito) */

        Swal.fire({ // Muestra el array de productos en un string, no supe como hacer un foreach para poder mostrar un listado de cada uno.
            title: 'Carrito de compras:',
            html: `

                <div class="card-body">
                    <h5 class="especialidades__title card-title">${seleccionCarrito}</h5>
                    <p class="especialidades__text card-text"></p>
                </div>

        `
        })

    })
    
    botonCarrito2.addEventListener("click", () => {
        
        Swal.fire({
            title: 'Carrito de compras:',
            html: `
                <div class="card-body">
                    <h5 class="especialidades__title card-title">${seleccionCarrito}</h5>
                    <p class="especialidades__text card-text"></p>
                </div>
        `
        })

    })
    

    

})

setTimeout(() => {
    Swal.fire({
        position: 'bottom-end',
        background: '#334756',
        icon: 'question',
        showConfirmButton: false,
        title: 'Necesitas ayuda?',
        footer: '<a href="../pages/contacto.html">Haz click aquí para contactarnos</a>',
        timer: 15000
        
    })
    
}, 12000);


