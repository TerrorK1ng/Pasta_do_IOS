const VelocidadeMaxima = 80;
let PerguntarVelocidade = prompt('Qual a velocidade do seu Carro?');

if(PerguntarVelocidade > 80) {
    let multa = (PerguntarVelocidade-80)*5;
    document.write(`Voce Foi multado e o valor da Multa é R$  ${multa} Reais`);
}
else{
    document.write('Voce não Foi Multado!');
}