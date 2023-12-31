const bcrypt = require("bcrypt");

const createCrypt = (data) => {
  const hashPassword = bcrypt.hashSync(data, bcrypt.genSaltSync(10));
  console.log(hashPassword);
  return hashPassword;
};

const verifyCrypt = (data, crypt) => {
  const comparecrypt = bcrypt.compareSync(data, crypt);
  console.log(comparecrypt);
  return comparecrypt;
};

module.exports.createCrypt = createCrypt;
module.exports.verifyCrypt = verifyCrypt;
