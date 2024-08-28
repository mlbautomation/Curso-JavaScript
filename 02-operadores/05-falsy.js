// short-circuit

// Los que devuelven un valor falso
// false, 0, '', null, undefined, NaN


/* Con OR devuelve el primero
que hay evaluado en true */
let nombre = '';
let username = nombre || 'Anonimo';
console.log(username);

/* Con AND devuelve el ultimo
que hay evaluado en true 
siempre y cuando todos hayan
evaluado en true */

/* AND evalua funciones siempre y
la primera haya evaluado en true */

/* Si queremos ejecutar una lógica
siempre y cuando una logica anterior 
haya devuelto true, podemos usar 
este operador AND en esta forma */

function fn1(){
    console.log('soy función 1');
    return false
}

function fn2(){
    console.log('soy función 2');
    return true
}

let x = fn1() && fn2();