const selectCarRentals = require("./queries/selectCarRentals");

const fetchCarRentals = async () => {
  const carRentals = await selectCarRentals();
  return { carRentals };
};

module.exports = fetchCarRentals;
