const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadora_idade'); //importando o módulo

const mensagem = modulo.saudacao('silva548'); // Executando a função
const idadeEm2050 = calculadora_idade.idade('silva548', 2008); // executando a função

console.log(mensagem);
console.log(idadeEm2050);