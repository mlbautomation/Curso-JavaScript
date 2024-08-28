//Por convención una función constructora
//se escribe usando UpperCamelCase (PascalCase)
//(La primera con mayúscula).

//Recueda de Factory Function usa
//camelCase.

// { id:2, recuperarClave: function(){} }
function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {
        console.log('recuperando clave...')
    }
}

// cuando tenemos una propiedad y le estamos
// asignando una funcion, sea un constructor 
// o factory funtion, dejamos de llamarlos funciones
// ahora se les llama metodos:
// funcion asignada a una propiedad de un objeto
let usuario = new Usuario();
console.log(usuario);

//new:
//1.Se crea un objeto literal del aire {}
//2.Se vincula el prototipo de la funcion
//Usuario con el objeto que se acaba de crear
//3.El objeto vacio que se creó, se le asigna
//a la palabra reservada de this.
//4.Si la funcion no rettorna nada,
//entonces retorna this.



