const insertEvent = require("./queries/insertEvent");

const createEvent = async ({
  userId,
  title,
  description,
  date,
  time,
  location,
  picture_url,
  age_limit,
  additional_info
}) => {
  const eventId = await insertEvent({
    userId,
    title,
    description,
    date,
    time,
    location,
    picture_url,
    age_limit,
    additional_info
  });

  return eventId;
};

module.exports = createEvent;
