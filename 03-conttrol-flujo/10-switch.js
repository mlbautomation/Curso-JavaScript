let statusMachine = 3;

switch (statusMachine){
    case 1:
        console.log('numero 1');
        break;
    case 2:
        console.log('numero 2');
        break;
    default:
        console.log('numero desconocido');
}

let accion = 'listar'

switch (accion) {
    case 'listar':
        console.log('accion listar');
        break;
    case 'guardar':
        console.log('accion guardar');
        break;
    default: 
        console.log('accion no reconocida');
}