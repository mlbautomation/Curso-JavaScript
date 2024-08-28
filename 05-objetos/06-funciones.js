/* Los objetos en JavaScript son considerados
objetos y de primera clase, es decir:
Las funciones, como la función constructora
* pueden ser asignada a otras variables
* pasadas como argumentos a ootras funciones
* o tambien retornadas de otras funciones
* y estas tambien tienen propiedades 
*/

function Usuario(nombre){
    this.nombre = nombre;
}
console.log(Usuario.name); //nombre de ka función
console.log(Usuario.length); //cantidad de argumentos

const U = Usuario;
let user1 = new U('Johao');

console.log(user1);

function of(Fn, arg){
    return new Fn(arg);
}

let user2 = of(Usuario,'Nancybell');
console.log(user2);

let user3 = of(U,'Jorge Luis');
console.log(user3);

function returned(){
    return function(){
        console.log('Hola mundo...')
    }
}

let saludo = returned();
saludo();