const selectBusServices = require("./queries/selectBusServices");

const fetchBusServices = async () => {
  const busServices = await selectBusServices();
  return { busServices };
};

module.exports = fetchBusServices;
