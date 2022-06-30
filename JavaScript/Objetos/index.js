let Matheus = {
    Nome: 'Matheus',
    Sobrenome: 'Vaz',
    Idade: 19,
    Emprego: 'Professor e ADM do IOS',
    Carro: 0,
    Estado_Civil: 'Online 😎',
    Cor_Dos_Olhos: 'Preto da Cor do Pecado rs',
    Hobbies: ['Jogar no PS4', 'Filmes', 'Jogar Futebol'],
    Endereco: {
        Rua: 'Rua Dos Bobos',
        Número: 157,
        Cidade: 'São Paulo',
        Estado: 'SP',
    },
};
const array = [1,2,3,4,5];
let [Valor01, Valor02, ...Resto] = array;
console.log(Valor01);
console.log(Valor02);
console.log(Resto);