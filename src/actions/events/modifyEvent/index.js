const updateEvent = require("./queries/updateEvent");

const modifyEvent = async ({
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
}) => {
  await updateEvent({
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

  return { eventId };
};

module.exports = modifyEvent;
