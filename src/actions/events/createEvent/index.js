const insertEvent = require("./queries/insertEvent");

const createEvent = async ({
  userId,
  title,
  description,
  date,
  time,
  location,
  pictureUrl,
  ageLimit,
  additionalInfo
}) => {
  const eventId = await insertEvent({
    userId,
    title,
    description,
    date,
    time,
    location,
    pictureUrl,
    ageLimit,
    additionalInfo
  });

  return eventId;
};

module.exports = createEvent;
