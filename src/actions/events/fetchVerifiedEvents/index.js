const selectVerifiedEvents = require("./queries/selectVerifiedEvents");

const fetchVerifiedEvents = async () => {
  const events = await selectVerifiedEvents();
  return { events };
};

module.exports = fetchVerifiedEvents;
