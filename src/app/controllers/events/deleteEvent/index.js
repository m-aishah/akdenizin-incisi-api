const handleAPIError = require("~root/utils/handleAPIError");
const removeEvent = require("~root/actions/events/removeEvent");
const deleteEventSchema = require("./schemas/deleteEventSchema");

const deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  const { userId } = req.user;

  try {
    await deleteEventSchema.validate({ eventId }, { abortEarly: true });
    const { isDeleted } = await removeEvent({ eventId, userId });

    return res.status(200).send({ isDeleted });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteEvent;
