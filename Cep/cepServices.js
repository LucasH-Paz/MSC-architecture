const cepModel = require('./cepModels');

const parseToWithout = (cep) => cep.includes('-') ? cep.replace('-', '') : cep;

const parseToWith = (cep) => {
  let fixedCep = cep;
  if (!cep.includes('-')) {
    let array = cep.split('');
    array.splice(5, 0, '-');
    fixedCep = array.join('');
  }

  return fixedCep;
};

const find = async (cep) => {
  const fixedCep = parseToWithout(cep);
  return await cepModel.findByCep(fixedCep);
};

module.exports = {
  find,
}