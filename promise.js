const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const firstStep = await promiseTheaterIXX();
    const secondStep = await promiseTheaterVGC();
    const allStep = [...firstStep, ...secondStep].filter((value) => value.hasil === emosi).length;
    return allStep;
  } catch (error) {
    console.log(error)
  }
} 

module.exports = {
  promiseOutput,
};
