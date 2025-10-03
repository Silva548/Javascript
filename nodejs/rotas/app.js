// importa o  modulo http nativo do node.js
import http from 'http';
const PORT = 3000;

//cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta como HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //roteamento básico
    if (url === '/') {
        response.statusCode = 200; // OK
        response.end('<h1>fale conosco</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; // OK
        response.end('<h1>sobre nós</h1><p>esta é uma aplicação de exemplo com node.js puro.</p>');

    } else {
        // se nenhuma rota corresponder
        response.statusCode = 404; // not found
        response.end('<h1>404 - página não encontrada</h1>');
    }
});

//inicia o servidor para ouvir na porta definida
server.listen(PORT, () => {
    console.log(`servidor rodando em http://localhost:${PORT}`);
});