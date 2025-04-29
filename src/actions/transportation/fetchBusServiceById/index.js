const selectBusServiceById = require("./queries/selectBusServiceById");

const fetchBusServiceById = async ({ busServiceId }) => {
  const busService = await selectBusServiceById({ busServiceId });
  return { busService };
};

module.exports = fetchBusServiceById;
