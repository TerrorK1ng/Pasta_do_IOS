//              Variaveis De Localização / Caminho

const CaminhoForm = document.querySelector('#my-form');
let InputDoNome = CaminhoForm.querySelector('#name');
let InputDoEmail = CaminhoForm.querySelector('#email');
let SelectDoHorario = CaminhoForm.querySelector('#horario');
let Userlista = document.querySelector('#users');


CaminhoForm.addEventListener('submit', AoEnviar)
function AoEnviar (e) {
    e.preventDefault(); // <= Impede que o evento padrão ( Recarregar a página ) ocorra.
    if(InputDoNome.value === '' || InputDoEmail.value === '') {
        alert('Preencha os dados do Formulário Calango');
    } else {
        let li = document.createElement('li');
        li.appendChild(
            document.createTextNode(`O nome digitado foi ${InputDoNome.value} Email digitado ${InputDoEmail.value}`)
        );
        Userlista.appendChild(li);
    }
}