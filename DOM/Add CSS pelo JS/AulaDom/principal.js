//              Variaveis Globais

let Paciente = document.querySelector('#primeiro-paciente');
let ValorPeso = Paciente.querySelector('.info-peso');
let ValorAltura = Paciente.querySelector('.info-altura');

let PuxarAlturaPaciente = ValorAltura.textContent;
let PuxarPesoPaciente = ValorPeso.textContent;
let FazerCalculoIMC = PuxarPesoPaciente / PuxarAlturaPaciente ** 2;

console.log(FazerCalculoIMC);

let CaminhoDaTabelaIMC = Paciente.querySelector('.info-imc');
CaminhoDaTabelaIMC.textContent = FazerCalculoIMC;

if(PuxarPesoPaciente >= 300) {
    CaminhoDaTabelaIMC.textContent = 'Peso Inválido';
}