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
    [1, {id: 1, name: 'Marlon'}],
    [2, {id: 2, name: 'Johao'}],
    [3, {id: 3, name: 'Nancybell'}],
]

function toPairs(arr){
    let pairs = [];
    for (let indice in arr) {
        pairs[indice]=[arr[indice].id, arr[indice]];
        }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);
