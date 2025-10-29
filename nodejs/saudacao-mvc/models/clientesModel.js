module.exports = {

  gerarMensagemPersonalizada: (login, senha) => {
    let acesso;

    if (login === "jao" && senha === "1234") {
      acesso = "liberado";
     } else {
      acesso = "Negado";
     }
    return `Olá, ${login}! seu acesso foi ${acesso},`;
    }  
  
  };
