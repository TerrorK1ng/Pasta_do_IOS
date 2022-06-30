//      Primeira Atividade
/*
const IdadeMinimaParaVoto = 2006;
let VerificarIdade = parseInt(prompt('Digite o seu Ano de Nascimento e verifique se está apto a votar'));

if(VerificarIdade != IdadeMinimaParaVoto) {
    document.write('Você não tem mais de 16 Anos e não pode votar');
}
else {
    document.write('Parabens você pode votar no Lula !');
}
*/
//      Segunda Atividade
/*
let Senha = 1234;
let PegarSenhaDigitada = prompt('Digite a Senha correta para Acessar a Página');
let VerificarSenha = (PegarSenhaDigitada != Senha) ? alert('ACESSO NEGADO') : alert('ACESSO PERMITIDO');
*/
//      Terceira Atividade 

let ValoresParaSeremDigitados = ['M', 'm', 'V', 'v', 'N', 'n'];
let PegarTurno = prompt('Digite Abaixo o Turno que você estuda, "M" Matutino, "V" Vespertino e "N" Noturno');

if(PegarTurno == ValoresParaSeremDigitados[0] || PegarTurno == ValoresParaSeremDigitados[1]) {
    document.write('Bom Dia !');
}
else if(PegarTurno == ValoresParaSeremDigitados[2] || PegarTurno == ValoresParaSeremDigitados[3]) {
    document.write('Boa Tarde !');
}
else if(PegarTurno == ValoresParaSeremDigitados[4] || PegarTurno == ValoresParaSeremDigitados[5]) {
    document.write('Bom Noite !');
}
else {
    document.write('Valor Invalido');
}