//No son atajos de teclado
//sirve para JavaScript

//Formas de crear un objeto
let objeto1 = {};
//todos los objetos que se crean en JavaScript
//continen una propiedad llamada "constructor"
//y esta propidad nos indica con que constructor
//fue creado este objeto
let objeto2 = new Object();

function Usuario(){
    this.name = 'Jorge Luis'
}
let user = new Usuario();
console.log(user);

/*
Tambien tenemos:
* new Array();
* new String(); '', "". ``
* new Number();
* new Boolean
*/

//Aqui una diferencia al crear usando constructores
let string1 = "1+1"; //aqui se utiliza el string literal
let string2 = new String("1+1"); //aqui se utiliza el string constructor

console.log('string1 = ""', typeof string1); //string
console.log('string2 = ""', typeof string2); //object

console.log(eval(string1), eval(string2));
console.log(string1.valueOf(), string2.valueOf());
// valueOf() es un metodo para obtener el valor
// ttabmbien es un metodo de los Boolean y los Number

