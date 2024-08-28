// Iterar las propiedades de un objeto
let user = {
    id: 1,
    name: 'Marlon',
    age: 25,
};
for (let prop in user) {
    console.log(prop, user[prop]);
}

console.log('*********************')
let animales = ['perro', 'gato', 'conejo']
//for-in asigna el indice a 'indice'
for (let indice in animales) {
    console.log(indice, animales[indice]);
}