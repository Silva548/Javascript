//importando o  modulo http
const http = require('http');

//criando um servidor que respondo com "hello world!" para todas as requisicoes
http.createServer((req, res) => {
    //definido o cabecalho de resposta com status 200 (ok) e tipo de conteudo text/plain
    res.writeHead(200, {'content-type': 'text/plain'});
    //enviando aq resposta "hello world!"
    res.end('ola mundo!');
    //adicionando um log no console para cada requisicao recebida 
}).listen(8080);
console.log('servidor rodando em http://localhost:8080/');imagem