// const no permiite cambiar el valor
// (es decir que deje de ser un objeto, en nuestro ejemplo)
// pero si permite agregar propiedades o borrarlas

const user = { id:1 };

user.name = 'Marlon';
user.guardar = function () {
    console.log('Guardando...', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// Si no queremos que se modifique el objeto:
const user1 = Object.freeze({ id: 2});
user1.name = 'Johao';
user1.id = 3;
console.log(user1);

// Si queremos que solo cambie los valores,
// mas no agregar o borrar propiedades:
const user2 = Object.seal({ id: 4});
user2.name = 'Nancybell';
user2.id = 5;
console.log(user2);