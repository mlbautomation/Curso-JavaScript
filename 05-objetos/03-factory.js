let user = {
    id: 1,
    name: 'Marlon',
    email: 'marlon.ly@gmail',
    activo: true,
    recuperarClave: function () {
        console.log('recuperando clave...')
    },
}

// Herencia (Factory functions)

function crearUsuario(name, email){
    return {
        name,
        email,
        activo: true,
        recuperarClave: function () {
            console.log('recuperando clave...')
        },
    }  
}

let user1 = crearUsuario('Johao', 'johao.ly@gmail.com');
let user2 = crearUsuario('Nancybell', 'nancybell.ly@gmail.com');

console.log(user1);
console.log(user2);