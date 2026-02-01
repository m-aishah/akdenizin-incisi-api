const fetchCarRentals = require("~root/actions/transportation/fetchCarRentals");
const handleAPIError = require("~root/utils/handleAPIError");

const getCarRentals = async (req, res) => {
  try {
    const { carRentals } = await fetchCarRentals();
    res.status(200).send({
      carRentals
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getCarRentals;
