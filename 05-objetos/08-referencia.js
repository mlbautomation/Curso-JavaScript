/* Bloque 1
let a = 1;
let b = a;

b++;
console.log(a, b);
*/

/* Bloque 2
//Los objetos al asignar a variables
//lo que se esta haciendo es asignar una dirección

let a = {};
let b = a;

b.prop = 1;
console.log(a, b);
*/

/* Bloque 3: no incrementa a
let a = 1;
function suma(n){
    n++;
}
suma(a);
console.log(a);
*/

/* Bloque 4: si incrementa a,
// los objetos se pasan por referencia
let a = {prop: 1};
function suma(n){
    n.prop++;
}
suma(a);
console.log(a);
*/

//Los primitivos se copian las variables
//los de referencia se pasan por referencia
//objetos, array y funciones!!!