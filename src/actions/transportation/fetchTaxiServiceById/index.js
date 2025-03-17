const selectTaxiServiceById = require("./queries/selectTaxiServiceById");

const fetchTaxiServiceById = async ({ taxiServiceId }) => {
  const taxiService = await selectTaxiServiceById({ taxiServiceId });
  return { taxiService };
};

module.exports = fetchTaxiServiceById;
