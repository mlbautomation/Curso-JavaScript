let email = 'marlon.ly@gmail';
let name = 'Marlon';
let direccion = {
    calle: 'Jr. Bolognesi',
    numero: 15,
}

let user = {
    email: 'marlon.ly@gmail',
    name: 'Marlon',
    direccion: {
        calle: 'Jr. Bolognesi',
        numero: 15,
    },
    activo: true,
    //se puede ingresar funciones
    //recuperarClave: function recuperarClave() {},
    //tambien podemos usar una función anónima
    //ya que tenemos una propiedad y no redundar en la función
    recuperarClave: function () {
        console.log('Recuperando clave...')
    },
}