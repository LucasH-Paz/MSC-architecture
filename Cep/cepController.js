const cepServices = require('./cepServices');
const { createError } = require('./cepMiddlewares');

const find = async (req, res, next) => {
  const { cep } = req.params;

  const cepInfo = await cepServices.find(cep);
  if (!cepInfo) return next(createError(404, 'CEP não encontrado'));

  return res.status(200).json(cepInfo);
};

module.exports = {
  find,
};
