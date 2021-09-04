// Aqui executamos as queries necessaria para o CRUD
const connection = require('../General/connection');

const FIND_QUERY_CEP = 'SELECT * FROM cep_lookup.ceps WHERE cep=?';

const findByCep = async (cep) => {
  const [[cepData]] = await connection.execute(FIND_QUERY_CEP, [cep]);
  return cepData;
};
