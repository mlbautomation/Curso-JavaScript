let personaje = {
    nombre: 'Marlon',
    anime: 'Naruto',
    edad: 38,
};

console.log(typeof personaje);
console.log(personaje);
console.log(personaje.anime);

console.log(personaje['edad']);
personaje.edad = 40;
console.log(personaje['edad']);
personaje['edad'] = 45;
console.log(personaje['edad']);

delete personaje.anime;
console.log(personaje);