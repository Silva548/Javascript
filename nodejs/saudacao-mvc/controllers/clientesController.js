const { clientes, formulario } = require("./siteController");

module.exports = {

    clientes: (req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },

    formulario: (req, res) => {
        res.sendFile('login.html', { root: './views' });
      },
    
      login: (req, res) => {
        const { nome, senha} = req.body;
        const mensagem = clientesModel.gerarMensagemPersonalizada(nome, senha);
        res.send(`<h1>${mensagem}</h1>`);
      }

};