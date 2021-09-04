const createError = (code, message) => ({ code, message });

const validateCep = (req, _res, next) => {
  const { cep } = req.params;
  const validCep = /\d{5}-?\d{3}/;
  if (!cep || cep === '' || !validCep.test(cep)) {
    return next(createError(400, 'informe um cep válido'));
  }
  next();
};

module.exports = {
  validateCep,
  createError,
};
