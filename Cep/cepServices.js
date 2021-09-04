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

const add = async (cepObj) => {
  const { cep } = cepObj;
  const fixedCep = parseToWithout(cep);

  const exists = await find(cep);

  if ( exists && exists.cep) return { message: 'cep already exists'};

  const addNewObj = await cepModel.addNew({ ...cepObj, cep: fixedCep });
  const fixedOutput = { ...addNewObj, cep };
  return fixedOutput;
};

module.exports = {
  find,
  add,
}