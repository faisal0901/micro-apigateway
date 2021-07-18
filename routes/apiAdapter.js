const axios = require("axios");
const { TIMEOUT } = process.env;
module.exports = (baseURL) => {
  return axios.create({
    baseURL,
    timeout: parseInt(TIMEOUT),
  });
};
