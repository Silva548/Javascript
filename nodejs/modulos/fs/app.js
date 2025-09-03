//importando modulo fs (file system)
const fs = require('fs');

//lendo um arquivo de forma assincrona
fs.readFile('exemplo.txt', 'utf8', (erro, dados) => {
    //tratando erro
    if (erro) {
      //adicionando o erro no console
      console.error('erro ao ler arquivo:', erro);
      //retornando para não executar o console.log abaixo
      return;
    }
    //se nao houver erro, exibindo o conteudo do arquivo
    console.log('conteudo do arquivo:', dados);
  });
  //imprimindo uma mensagem antes da leitura do arquivo
  comnsole.log ('esta mensagem aparece primeiro.');