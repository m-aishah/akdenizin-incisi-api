const handleAPIError = require("~root/utils/handleAPIError");
const createEvent = require("~root/actions/events/createEvent");
const postEventSchema = require("./schemas/postEventSchema");

const postEvent = async (req, res) => {
  const { userId } = req.user;
  const {
    title,
    description,
    date,
    time,
    location,
    picture_url,
    age_limit,
    additional_info
  } = req.body;

  try {
    await postEventSchema.validate(
      { title, description, date, time, location },
      { abortEarly: false }
    );

    const eventId = await createEvent({
      title,
      description,
      date,
      time,
      location,
      picture_url,
      age_limit,
      additional_info,
      userId
    });

    return res.status(200).send({
      eventId
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = postEvent;
