const fetchTaxiServices = require("~root/actions/transportation/fetchTaxiServices");
const handleAPIError = require("~root/utils/handleAPIError");

const getTaxiServices = async (req, res) => {
  try {
    const { taxiServices } = await fetchTaxiServices();
    res.status(200).send({
      taxiServices
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getTaxiServices;
