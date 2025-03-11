const selectEvents = require("./queries/selectEvents");

const fetchEvents = async () => {
  const events = await selectEvents();
  return { events };
};

module.exports = fetchEvents;
