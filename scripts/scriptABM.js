
class Persona {
    constructor(nombre, apellido, direccion, telefono, estado, correo){ 
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.estado = estado
        this.correo = correo
    }
}

let personas = [] // se crea el array que contendrá a las personas

if(localStorage.getItem("productosStorage")) { // verificación si ya existe en el storage información
    personas = JSON.parse(localStorage.getItem("productosStorage"))
} else {
    localStorage.setItem("productosStorage", JSON.stringify(personas))
}

const form = document.getElementById("idForm")
const botonMostrar = document.getElementById("botonMostrar")
const divPersonas = document.getElementById("divPersonas")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let datForm = new FormData(e.target) // obtener datos con name de formularios
    const persona = new Persona(datForm.get("nombre"),datForm.get("apellido"),datForm.get("direccion"),datForm.get("telefono"),datForm.get("estado"),datForm.get("correo"))
    personas.push(persona)
    localStorage.setItem("productosStorage", JSON.stringify(personas))
    
    Swal.fire({
        icon: 'success',
        title:`Se agregó el cliente: "${persona.nombre} ${persona.apellido}" con éxito.`,
        showConfirmButton: false,
        timer: 3500,
    })
    
    form.reset()
})

botonMostrar.addEventListener("click", () => {
    let productosStorage = JSON.parse(localStorage.getItem("productosStorage"))
    divPersonas.innerHTML = ""
    productosStorage.forEach((persona, indice) => {
        divPersonas.innerHTML += `

            <div id="persona${indice}">
                <div>
                    <div class="card index__card">
                        <div class="card-body">
                            <h5 class="card-title">Nombre: ${persona.nombre} ${persona.apellido}</h5>
                            <p class="card-text index__pcards">Direccion del cliente: ${persona.direccion}</p>
                            <p class="card-text index__pcards">Correo: ${persona.correo}</p>
                            <p class="card-text index__pcards">Estado: ${persona.estado}</p>
                            <p class="card-text index__pcards">Telefono: $${persona.telefono}</p>
                        </div>  
                        <button class="btn btn-danger">Eliminar persona de la base</button>
                    </div>
                    
                </div>
            </div>
        `
        
    });
    
    productosStorage.forEach((persona, indice) => {
        document.getElementById(`persona${indice}`).lastElementChild.addEventListener("click", () => {
            /* alert(`Se eliminó el persona: ${persona.nombre}`) */
            document.getElementById(`persona${indice}`).remove() // Eliminar del DOM
            personas.splice(indice, 1) // eliminar del array
            localStorage.setItem("persona", JSON.stringify(personas))
            

            let timerInterval
            Swal.fire({
            title: 'Se eliminará al cliente de la base de datos',
            html: 'Procesando datos <b></b> milisegundos.',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                    icon: 'warning',
                    title: `Se eliminó del storage el cliente: ${persona.nombre} ${persona.apellido}`,
                    showConfirmButton: false,
                    timer: 2500,
                })
            }
            })


            
        })

    })
})





