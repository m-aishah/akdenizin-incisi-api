const selectEventById = require("./queries/selectEventById");

const fetchEventById = async ({ eventId }) => {
  const event = await selectEventById({ eventId });
  return { event };
};

module.exports = fetchEventById;
