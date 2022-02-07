// Crie um objeto que receba ao menos três propriedades sobre você.
const user = {
    name = 'Niedja',
    age = 29,
    profession = 'English Teacher',
}
console.log(user);

// Adicione uma nova propriedade sem alterar seu objeto inicial.
const user = {
    name = 'Niedja',
    age = 29,
    profession = 'English Teacher',
}
user.languages = ['Portuguese','English','German'];
console.log(user);
// Remova uma propriedade desse objeto.
const user = {
    name = 'Niedja',
    age = 29,
    profession = 'English Teacher',
}
delete user.age;
console.log(user);
//Mostre no console todas as propriedades desse objeto.
console.log(user);
console.log(user.age);
console.log(user.profession);
console.log(user.languages);
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
cadastro = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
cadastro = ['Red', 'Blue', 'Green', 'Yellow','Purple'];
const colors = [{
    name: 'Red',
    age: 20,
    phoneNumber: 246810, 
    friends: ['Juquinha', 'Mariazinha','Miguel','Marcos']
},
{
    name: 'Blue',
    age: 21,
    phoneNumber: 36912, 
    friends: ['Miguel','Marcos','Juquinha', 'Mariazinha']
},
{
    name: 'Green',
    age: 22,
    phoneNumber: 123456, 
    friends: ['Naomi', 'Rayka','Leo','Layla']
},
{
    name: 'Yellow',
    age: 23,
    phoneNumber: 987654, 
    friends: ['Leo','Layla','Naomi', 'Rayka']
},
{
    name: 'Purple',
    age: 24,
    phoneNumber: 143679, 
    friends:['Barbara','Thai','Layla','Naomi']
}]

//Na propriedade amigos, adicione ao menos 4 itens.
console.log(colors)
// Mostre no console o nome de um amigo de cada lista.  
console.log(colors[0].friends[0])