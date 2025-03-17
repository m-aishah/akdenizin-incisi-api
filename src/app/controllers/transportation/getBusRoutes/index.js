const fetchBusRoutes = require("~root/actions/transportation/fetchBusRoutes");
const handleAPIError = require("~root/utils/handleAPIError");
const getBusRoutesSchema = require("./schemas/getBusRoutesSchema");

const getBusRoutes = async (req, res) => {
  const { busId } = req.params;

  try {
    await getBusRoutesSchema.validate({ busId }, { abortEarly: true });

    const { busRoutes } = await fetchBusRoutes({ busId });
    res.status(200).send({
      busRoutes
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBusRoutes;
