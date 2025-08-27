function idade(nome,anoNas){
    idade = 2050 - anoNas;
    return `olá, ${nome}! Em 2050 você tera ${idade} anos!`;
}  

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    idade
};