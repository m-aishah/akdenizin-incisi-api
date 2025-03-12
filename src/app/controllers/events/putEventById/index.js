const handleAPIError = require("~root/utils/handleAPIError");
const modifyEvent = require("~root/actions/events/modifyEvent");
const putEventByIdSchema = require("./schemas/putEventByIdSchema");

const putEventById = async (req, res) => {
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
    await putEventByIdSchema.validate(
      { title, description, date, time, location },
      { abortEarly: false }
    );

    await modifyEvent({
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

    res.status(200).send({ success: true });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = putEventById;
