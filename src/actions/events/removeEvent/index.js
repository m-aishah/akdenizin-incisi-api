const deleteEvent = require("./queries/deleteEvent");

const removeEvent = async ({ eventId, userId }) => {
  const result = await deleteEvent({ eventId, userId });
  return { isDeleted: result.affectedRows };
};

module.exports = removeEvent;
