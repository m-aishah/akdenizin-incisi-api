const selectBusRoutes = require("./queries/selectBusRoutes");

const fetchBusRoutes = async ({ busId }) => {
  const busRoutes = await selectBusRoutes({ busId });
  return { busRoutes };
};

module.exports = fetchBusRoutes;
