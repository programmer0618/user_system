const { sign, verify } = require("jsonwebtoken");

module.exports.createToken = (data) => {
  return sign(data, process.env.SECRET);
};

module.exports.verifyToken = (token) => {
  try {
    return verify(token, process.env.SECRET);
  } catch (error) {
    console.log(error);
  }
};
