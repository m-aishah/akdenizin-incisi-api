const handleAPIError = require("~root/utils/handleAPIError");
const fetchEventById = require("~root/actions/events/fetchEventById");
const getEventByIdSchema = require("./schemas/getEventByIdSchema");

const getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    await getEventByIdSchema.validate({ eventId }, { abortEarly: true });
    const { event } = await fetchEventById({ eventId });

    return res.status(200).send({
      event
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getEventById;
