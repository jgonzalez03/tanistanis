



fetch('../scripts/json/productos.json')
.then(function(resp){
    return resp.json()
})
.then(function(data) {
    console.log(data)
})

console.log(data)


const divProductos = document.getElementById("divProductos")


fetch('../scripts/json/productos.json')
.then(promesa => promesa.json())
.then(info => { 
    
    info.forEach(producto => {
        divProductos.innerHTML += `
                <div id="compra${producto.id}" class="col">
                    <div class="card index__card">
                        <img src="../resources/${producto.img_producto}" class="card-img-top" alt="Galletitas tipo cookie americana">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre_producto}</h5>
                            <p class="card-text index__pcards">${producto.descripcion_producto}</p>
                            <a href="#" class="btn btn-primary">Lo quiero ya!</a>
                        </div>
                    </div>
                </div>
                
`      
});   
})





/* divProductos.forEach((id) => {
    document.getElementById(`compra${id}`).lastElementChild.addEventListener("click", () => {
        console.log(divProductos)
    })

    
}) */


setTimeout(() => {
    Swal.fire({
        position: 'bottom-end',
        icon: 'question',
        title: 'Necesitas ayuda? Chatea con nosotros!',
        showConfirmButton: true,
        showCancelButton: true,
        timer: 15000
    })
    
}, 5000);


