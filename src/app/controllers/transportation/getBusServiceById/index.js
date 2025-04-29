const fetchBusServiceById = require("~root/actions/transportation/fetchBusServiceById");
const handleAPIError = require("~root/utils/handleAPIError");
const getBusServiceByIdSchema = require("./schema/getBusServiceByIdSchema");

const getBusServiceById = async (req, res) => {
  const { busServiceId } = req.params;

  try {
    await getBusServiceByIdSchema.validate(
      { busServiceId },
      { abortEarly: false }
    );

    const { busService } = await fetchBusServiceById({ busServiceId });
    res.status(200).send({
      busService
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBusServiceById;
