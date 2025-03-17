const fetchRouteById = require("~root/actions/transportation/fetchRouteById");
const handleAPIError = require("~root/utils/handleAPIError");
const getRouteByIdSchema = require("./schemas/getRouteByIdSchema");

const getRouteById = async (req, res) => {
  const { routeId } = req.params;
  try {
    await getRouteByIdSchema.validate({ routeId }, { abortEarly: false });

    const { route } = await fetchRouteById({ routeId });
    return res.status(200).send({
      route
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getRouteById;
