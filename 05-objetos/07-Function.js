function Punto(x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')}
}

 //Primer arrgumento: contexto de this
 //Luego los argumentos
Punto.call({}, 1, 2);

//call: te permite llamar funciones y pasarle el
//contexto de this, y asi poder aumentar los obejtos que 
//le estas pasando, extender
let punto = { z:7 };
Punto.call(punto, 1, 2); 
console.log(punto);

//applay: hace lo mismo que call,,
//pero los argumentos hay que pasarlo en un array.
Punto.apply(punto, [3, 4]);
console.log(punto);

/* 
//El comentario es que este constructor se aprenda pero 
//preferiblemente nunca lo uses, es solo para saber.
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() {console.log('Dibujando...')}
`);

const p = new Point(1, 2);
console.log(p);
 */