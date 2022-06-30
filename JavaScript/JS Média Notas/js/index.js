//          Variaveis Caminho Das Strings

//          Primeiro Aluno
let CaminhoPrimeiroAluno = document.querySelector('#primeiro-aluno');

let PuxarNotaHTMLPrimeiroAluno = CaminhoPrimeiroAluno.querySelector('.info-nota-HTML');
let PuxarNotaCSSPrimeiroAluno = CaminhoPrimeiroAluno.querySelector('.info-nota-CSS');
let PuxarNotaJSPrimeiroAluno = CaminhoPrimeiroAluno.querySelector('.info-nota-JS');

//          Segundo Aluno
let CaminhoSegundoAluno = document.querySelector('#segundo-aluno');
let PuxarNotaHTMLSegundoAluno = CaminhoSegundoAluno.querySelector('.info-nota-HTML');
let PuxarNotaCSSSegundoAluno = CaminhoSegundoAluno.querySelector('.info-nota-CSS');
let PuxarNotaJSSegundoAluno = CaminhoSegundoAluno.querySelector('.info-nota-JS');

//          Terceiro Aluno
let CaminhoTerceiroAluno = document.querySelector('#terceiro-aluno');
let PuxarNotaHTMLTerceiroAluno = CaminhoTerceiroAluno.querySelector('.info-nota-HTML');
let PuxarNotaCSSTerceiroAluno = CaminhoTerceiroAluno.querySelector('.info-nota-CSS');
let PuxarNotaJSTerceiroAluno = CaminhoTerceiroAluno.querySelector('.info-nota-JS');

//          Quarto Aluno
let CaminhoQuartoAluno = document.querySelector('#quarto-aluno');
let PuxarNotaHTMLQuartoAluno = CaminhoQuartoAluno.querySelector('.info-nota-HTML');
let PuxarNotaCSSQuartoAluno = CaminhoQuartoAluno.querySelector('.info-nota-CSS');
let PuxarNotaJSQuartoAluno = CaminhoQuartoAluno.querySelector('.info-nota-JS');

//          Quinto Aluno
let CaminhoQuintoAluno = document.querySelector('#quinto-aluno');
let PuxarNotaHTMLQuintoAluno = CaminhoQuintoAluno.querySelector('.info-nota-HTML');
let PuxarNotaCSSQuintoAluno = CaminhoQuintoAluno.querySelector('.info-nota-CSS');
let PuxarNotaJSQuintoAluno = CaminhoQuintoAluno.querySelector('.info-nota-JS');

//          Variaveis Puxar Infos Dentro Das Strings

//          Primeiro Aluno
let InfoNotaDeHTMLPrimeiroAluno = parseInt(PuxarNotaHTMLPrimeiroAluno.textContent);
let InfoNotaDeCSSPrimeiroAluno = parseInt(PuxarNotaCSSPrimeiroAluno.textContent);
let InfoNotaDeJSPrimeiroAluno = parseInt(PuxarNotaJSPrimeiroAluno.textContent);

//          Segundo Aluno
let InfoNotaDeHTMLSegundoAluno = parseInt(PuxarNotaHTMLSegundoAluno.textContent);
let InfoNotaDeCSSSegundoAluno = parseInt(PuxarNotaCSSSegundoAluno.textContent);
let InfoNotaDeJSSegundoAluno = parseInt(PuxarNotaJSSegundoAluno.textContent);

//          Terceiro Aluno
let InfoNotaDeHTMLTerceiroAluno = parseInt(PuxarNotaHTMLTerceiroAluno.textContent);
let InfoNotaDeCSSTerceiroAluno = parseInt(PuxarNotaCSSTerceiroAluno.textContent);
let InfoNotaDeJSTerceiroAluno = parseInt(PuxarNotaJSTerceiroAluno.textContent);

//          Quarto Aluno
let InfoNotaDeHTMLQuartoAluno = parseInt(PuxarNotaHTMLQuartoAluno.textContent);
let InfoNotaDeCSSQuartoAluno = parseInt(PuxarNotaCSSQuartoAluno.textContent);
let InfoNotaDeJSQuartoAluno = parseInt(PuxarNotaJSQuartoAluno.textContent);

//          Quinto Aluno
let InfoNotaDeHTMLQuintoAluno = parseInt(PuxarNotaHTMLQuintoAluno.textContent);
let InfoNotaDeCSSQuintoAluno = parseInt(PuxarNotaCSSQuintoAluno.textContent);
let InfoNotaDeJSQuintoAluno = parseInt(PuxarNotaJSQuintoAluno.textContent);

//          Mostrar Notas Na Página HTMl

//          Primeiro Aluno
let CaminhoMediaNotasPrimeiroAluno = CaminhoPrimeiroAluno.querySelector('.info-media-notas');

let CalcularMediaPrimeiroAluno = (InfoNotaDeHTMLPrimeiroAluno + InfoNotaDeCSSPrimeiroAluno + InfoNotaDeJSPrimeiroAluno) / 3;

CaminhoMediaNotasPrimeiroAluno.textContent = CalcularMediaPrimeiroAluno.toFixed(2);


//          Segundo Aluno
let CaminhoMediaNotasSegundoAluno = CaminhoSegundoAluno.querySelector('.info-media-notas');

let CalcularMediaSegundoAluno = (InfoNotaDeHTMLSegundoAluno + InfoNotaDeCSSSegundoAluno + InfoNotaDeJSSegundoAluno) / 3;

CaminhoMediaNotasSegundoAluno.textContent = CalcularMediaSegundoAluno.toFixed(2);


//          Terceiro Aluno
let CaminhoMediaNotasTerceiroAluno = CaminhoTerceiroAluno.querySelector('.info-media-notas');

let CalcularMediaTerceiroAluno = (InfoNotaDeHTMLTerceiroAluno + InfoNotaDeCSSTerceiroAluno + InfoNotaDeJSTerceiroAluno) / 3;

CaminhoMediaNotasTerceiroAluno.textContent = CalcularMediaTerceiroAluno.toFixed(2);


//          Quarto Aluno
let CaminhoMediaNotasQuartoAluno = CaminhoQuartoAluno.querySelector('.info-media-notas');

let CalcularMediaQuartoAluno = (InfoNotaDeHTMLQuartoAluno + InfoNotaDeCSSQuartoAluno + InfoNotaDeJSQuartoAluno) / 3;

CaminhoMediaNotasQuartoAluno.textContent = CalcularMediaQuartoAluno.toFixed(2);


//          Quinto Aluno
let CaminhoMediaNotasQuintoAluno = CaminhoQuintoAluno.querySelector('.info-media-notas');

let CalcularMediaQuintoAluno = (InfoNotaDeHTMLQuintoAluno + InfoNotaDeCSSQuintoAluno + InfoNotaDeJSQuintoAluno) / 3;

CaminhoMediaNotasQuintoAluno.textContent = CalcularMediaQuintoAluno.toFixed(2);