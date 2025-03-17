const fetchAllRoutes = require("~root/actions/transportation/fetchAllRoutes");
const handleAPIError = require("~root/utils/handleAPIError");

const getAllRoutes = async (req, res) => {
  try {
    const { routes } = await fetchAllRoutes();
    return res.status(200).send({
      routes
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getAllRoutes;
