const handleAPIError = require("~root/utils/handleAPIError");
const fetchEvents = require("~root/actions/events/fetchEvents");

const getEvents = async (req, res) => {
  try {
    const { events } = await fetchEvents();
    return res.status(200).send({
      events
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getEvents;
