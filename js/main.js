
const boton = document.querySelector('#btn');
    
boton.addEventListener("click", () => {

    const solicitar = confirm("Deseas solicitar un Prestamos")

    if(solicitar){
            alert("Empezamos con el Prestamos")
        const usuario = datosUsuario()
        const opcionValida = verificarTipo( tipo )
        const prestamosElegido = descripcionPrestamos(opcionValida)   
            // console.log(`Hola ${usuario} has elegido:`)
            // console.log(prestamosElegido) 
            alert( `Hola ${usuario} has elegido: ${prestamosElegido}`)
            alert(" Gracias por visitarnos.")
        return 
    }
    console.log("No desea sacar ningun Prestamo")
    console.log("Gracias por visitarnos")
} )
