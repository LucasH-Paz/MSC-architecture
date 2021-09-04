const cepServices = require('./cepServices');
const { createError } = require('./cepMiddlewares');

const find = async (req, res, next) => {
  const { cep } = req.params;

  const cepInfo = await cepServices.find(cep);
  if (!cepInfo) return next(createError(404, 'CEP não encontrado'));

  return res.status(200).json(cepInfo);
};

const add = async (req, res, next) => {
  const newCep = await cepServices.add(req.body);
  if (newCep.message) return next(createError(409, 'CEP já existente'));

  return res.status(201).json(newCep);
};


module.exports = {
  find,
  add,
};
