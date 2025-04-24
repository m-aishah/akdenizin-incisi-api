const selectRouteById = require("./queries/selectRouteById");

const fetchRouteById = async ({ routeId }) => {
  const route = await selectRouteById({ routeId });
  return { route };
};

module.exports = fetchRouteById;
