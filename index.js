// Importando as ferramentas globais
const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const bodySchema = Joi.object({
  cep: Joi.string().pattern(/\d{5}-\d{3}/).required(),
  logradouro: Joi.string().not().empty().required().max(50),
  bairro: Joi.string().not().empty().required().max(20),
  localidade: Joi.string().not().empty().required().max(20),
  uf: Joi.string().not().empty().required().max(2),
});

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
