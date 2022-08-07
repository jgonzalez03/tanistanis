const divProductos = document.getElementById("divProductos")

fetch('../scripts/json/productos.json')
.then(promesa => promesa.json())
.then(info => { 
    
    info.forEach(producto => {
        divProductos.innerHTML += `
    <div class="col">
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


setTimeout(() => {
    Swal.fire({
        position: 'bottom-end',
        icon: 'question',
        title: 'Sigues ahi? Chatea con nosotros!',
        showConfirmButton: true,
        showCancelButton: true,
        timer: 15000
    })
    
}, 5000);


