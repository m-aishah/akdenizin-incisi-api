const selectTaxiServices = require("./queries/selectTaxiServices");

const fetchTaxiServices = async () => {
  const taxiServices = await selectTaxiServices();
  return { taxiServices };
};

module.exports = fetchTaxiServices;
