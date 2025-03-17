const selectUserConversations = require("./queries/selectUserConversations");

const fetchUserConversations = async ({ userId }) => {
  const conversations = await selectUserConversations({ userId });

  return conversations;
};

module.exports = fetchUserConversations;
