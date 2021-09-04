// Importando as ferramentas globais
const express = require('express');
const bodyParser = require('body-parser');

// Comecando a aplicacao
const app = express();
app.use(bodyParser.json());

// Endpoints


// Tratamento de erros geral

// Iniciando o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
