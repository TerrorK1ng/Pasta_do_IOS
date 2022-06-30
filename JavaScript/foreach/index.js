const Tarefas = [
    {
        ID: 1,
        Texto: 'Levar o Lixo',
        Concluida: true
    },
    {
        ID: 2,
        Texto: 'Encotrar com o chefe',
        Concluida: true

    },
    {
        ID: 3,
        Texto: 'Consulta no Dentista',
        Concluida: false
    }
]
Tarefas.forEach((Indice) => {
    console.log(`O Status da Tarefa é: `);
})
const idade = [21, 20, 25, 15, 17, 18];

let FiltrarIdade = idade.filter((idade) => {
    return idade < 20;
})
console.log(FiltrarIdade);

StatusTarefa = () => {
    let StringA = ''; 
    if(Tarefas.Concluida == true) {
        StringA = 'Concluida'
    }
    else {
        StringA = 'Não Concluida'
    }
}