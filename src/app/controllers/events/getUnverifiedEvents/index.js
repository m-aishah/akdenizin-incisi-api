const handleAPIError = require("~root/utils/handleAPIError");
const fetchUnverifiedEvents = require("~root/actions/events/fetchUnverifiedEvents");

const getEvents = async (req, res) => {
  try {
    const { events } = await fetchUnverifiedEvents();
    return res.status(200).send({
      events
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getEvents;
