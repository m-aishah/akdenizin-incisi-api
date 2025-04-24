const selectAllRoutes = require("./queries/selectAllRoutes");

const fetchAllRoutes = async () => {
  const routes = await selectAllRoutes();
  return { routes };
};

module.exports = fetchAllRoutes;
