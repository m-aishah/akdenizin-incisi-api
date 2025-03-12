const handleAPIError = require("~root/utils/handleAPIError");
const modifyEvent = require("~root/actions/events/modifyEvent");
const putEventByIdSchema = require("./schemas/putEventByIdSchema");

const putEventById = async (req, res) => {
  const { eventId } = req.params;
  const {
    title,
    description,
    date,
    time,
    location,
    pictureUrl,
    ageLimit,
    additionalInfo,
    isVerified,
    updatedAt
  } = req.body;

  try {
    await putEventByIdSchema.validate({ eventId }, { abortEarly: false });

    await modifyEvent({
      eventId,
      title,
      description,
      date,
      time,
      location,
      pictureUrl,
      ageLimit,
      additionalInfo,
      isVerified,
      updatedAt
    });

    return res.status(200).send({ success: true });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = putEventById;
