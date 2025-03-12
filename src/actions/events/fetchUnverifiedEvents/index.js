const selectUnverifiedEvents = require("./queries/selectUnverifiedEvents");

const fetchUnverifiedEvents = async () => {
  const events = await selectUnverifiedEvents();
  return { events };
};

module.exports = fetchUnverifiedEvents;
