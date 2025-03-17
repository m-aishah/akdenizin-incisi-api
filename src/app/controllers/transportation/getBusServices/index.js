const fetchBusServices = require("~root/actions/transportation/fetchBusServices");
const handleAPIError = require("~root/utils/handleAPIError");

const getBusServices = async (req, res) => {
  try {
    const { busServices } = await fetchBusServices();
    res.status(200).send({
      busServices
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getBusServices;
