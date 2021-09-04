// Aqui executamos as queries necessaria para o CRUD
const connection = require('../General/connection');

const FIND_QUERY_CEP = 'SELECT * FROM cep_lookup.ceps WHERE cep=?;';
const ADD_NEW_CEP = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)VALUES (?, ?, ?, ?, ?);';

const findByCep = async (cep) => {
  const [[cepData]] = await connection.execute(FIND_QUERY_CEP, [cep]);
  return cepData;
};

const addNew = async ({cep, logradouro, bairro, localidade, uf }) => {
  const newCepObj = {cep, logradouro, bairro, localidade, uf };
  await connection.execute(ADD_NEW_CEP, [cep, logradouro, bairro, localidade, uf]);
  return newCepObj;
};

module.exports = {
  findByCep,
  addNew,
}
