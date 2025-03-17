const fetchCarRentalById = require("~root/actions/transportation/fetchCarRentalById");
const handleAPIError = require("~root/utils/handleAPIError");
const getCarRentalByIdSchema = require("./schema/getCarRentalByIdSchema");

const getCarRentalById = async (req, res) => {
  const { carRentalId } = req.params;

  try {
    await getCarRentalByIdSchema.validate(
      { carRentalId },
      { abortEarly: false }
    );

    const { carRental } = await fetchCarRentalById({ carRentalId });
    res.status(200).send({
      carRental
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getCarRentalById;
