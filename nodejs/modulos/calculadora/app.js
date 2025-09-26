//const funcoes matematicas = require('./funcoes_matematicas');
//const calculadora_idade = require('./calculadora_idade');
import {somar,subtrair,multiplicar,dividir} from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log("soma: " + somar(5, 5, 5));
console.log("subtração: " + subtrair(5, 3));
console.log("multiplicação:" + multiplicar(5, 5));
console.log("divisão:" + dividir(5, 0));

console.log(calculadora_idade.idade("joão", 1976, 2050));