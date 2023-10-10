/* -------------------------------------------------
    ARCHIVO DE FUNCIONES
------------------------------------------------- */

/**
 * Funcion para pedir DAtos al Usuario(nombre, apellido, email)
 * @returns {String}
 */
let datosUsuario = () => {
    // Datos del Cliente:
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let email = prompt("Ingrese un E-mail: ");

    return nombre;
}

/**
 * Funcion para validar la opcion elegida
 * @param {String} tipo opcion elegida
 * @returns {Number} opcion elegida
 */
let verificarTipo = (tipo) => {
    let opcionPrestamos = parseInt(prompt(tipo))

    while( opcionPrestamos < 1 || opcionPrestamos > 5 || isNaN(opcionPrestamos)){
        opcionPrestamos = parseInt(prompt(`VUELVA A INGRESAR, ${tipo}`))
    }

    return opcionPrestamos;
}

/**
 * Funcion para obtener la descripcion del prestamo segun la opcion elegida
 * @param {Number} opcion opcion elegida, describe el prestamos 
 */
let descripcionPrestamos = (opcion) => {
    switch (opcion) {
        case 1:
            return (`Opcion: ${opcion} - Prestamo Persona`)
        case 2:
            return (`Opcion: ${opcion} - Prestamo Hipotecario`)
        case 3:
            return (`Opcion: ${opcion} - Prestamos Sueldo`)
        case 4:
            return (`Opcion: ${opcion} - Prestamos UVA`)
        default:
            return (`Opcion: ${opcion} - Ningun Prestamo`)
    }
}