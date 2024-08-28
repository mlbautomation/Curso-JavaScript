let array = [
    {
        id: 1,
        name: 'Marlon',
    },
    {
        id: 2,
        name: 'Johao',
    },
    {
        id: 3,
        name: 'Nancybell',
    },
]

let pares = [
    [1, {name: 'Marlon'}],
    [2, {name: 'Johao'}],
    [3, {name: 'Nancybell'}],
]

function toCollection(arr){
    let arrays = [];
    for (let indice in arr) {
        arrays[indice]=
            {
            id: arr[indice][0], 
            name: arr[indice][1].name
            };
        }
    return arrays;
}

let resultado = toCollection(pares);
console.log(resultado);