const fetchTaxiServiceById = require("~root/actions/transportation/fetchTaxiServiceById");
const handleAPIError = require("~root/utils/handleAPIError");
const getTaxiServiceByIdSchema = require("./schemas/getTaxiServiceByIdSchema");

const getTaxiServices = async (req, res) => {
  const { taxiServiceId } = req.params;

  try {
    await getTaxiServiceByIdSchema.validate(
      { taxiServiceId },
      { abortEarly: true }
    );

    const { taxiService } = await fetchTaxiServiceById({ taxiServiceId });

    res.status(200).send({
      taxiService
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getTaxiServices;
