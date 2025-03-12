const handleAPIError = require("~root/utils/handleAPIError");
const fetchVerifiedEvents = require("~root/actions/events/fetchVerifiedEvents");

const getVerifiedEvents = async (req, res) => {
  try {
    const { events } = await fetchVerifiedEvents();
    return res.status(200).send({
      events
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getVerifiedEvents;
