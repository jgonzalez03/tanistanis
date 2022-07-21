class Personas {
    constructor(nombre, apellido, direccion, telefono, comentarios){
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.telefono = telefono
        this.comentarios = comentarios
    }
}

const personas = []

// const form = documento.getElementById("IdForm") // Tiene mejor performance, pero si es muy chico no hay diferencia
const form = document.querySelector("#idForm")

form.addEventListener("submit", (event)=> {
    event.preventDefault() // esto es para que no ejecute automaticamente
    let nombre = document.getElementById("IDNombre").value
    let apellido = document.getElementById("IDApellido").value
    let direccion = document.getElementById("IDDireccion").value
    let telefono = parseInt(document.getElementById("IDTelefono").value) // para cambiarlo a numero
    let comentarios = document.getElementById("IDComentarios").value

    const persona = new Personas(nombre, apellido, direccion, telefono, comentarios)
    personas.push(persona)
    console.log(personas)
    form.reset()
})

document.querySelector("#botonPersonas").addEventListener("click", () => {
    
})