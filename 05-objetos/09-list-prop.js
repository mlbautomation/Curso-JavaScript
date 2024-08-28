//JavaScipt es un lenguaje dinamico, 
//quierre decir que a los objetos
//se le pueden agregar y borrar propiedades

const punto = {
    x: 10,
    y: 15,
    /* dibujar = function() { */
    dibujar() {
        console.log('dibujando...'); 
    }
};
console.log(Object.keys(punto));

//delete punto.dibujar;
if ('dibujar' in punto){
    punto.dibujar();
}
console.log(Object.keys(punto));
console.log('*****************');
for (let llave of Object.keys(punto)){
    console.log(llave, punto[llave]); //llave y valor
}

console.log('*****************');
for (let entry of Object.entries(punto)){
    console.log(entry);
}

console.log('*****************');
for (let llave in punto){
    console.log(llave, punto[llave]);
}
