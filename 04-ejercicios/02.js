/* 
* Nombre: ancho x alto
* 8K 7680 x 4320
* 4K 3840 x 2160
* WQHD 2560 x 1440
* FHD 1920 x 1080
* HD 1280 x 720
*/

let lsNombre = ['8K', '4K', 'WQHD', 'FHD', 'HD'];
let lsAncho = [7680, 3840, 2560, 1920, 1280];
let lsAlto = [4320, 2160, 1440, 1080, 720];
function nombreResolucion(ancho, alto){
    for (let i in lsAncho) {
        if (ancho>lsAncho[i]){
            console.log('En ancho:',i);
            for (let j in lsAlto){
                if (alto>lsAlto[j]){
                    console.log('En alto:',j);
                        if(i>j){
                            return lsNombre[i];
                        } 
                        else{
                            return lsNombre[j];
                        }
                }
            }
        };
    }
    return 'No hay resolucion';
}

let nombre = nombreResolucion(1366, 768);
console.log(nombre);