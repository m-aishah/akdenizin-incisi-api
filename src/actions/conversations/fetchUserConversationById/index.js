const selectUserConversationById = require("./queries/selectUserConversationById");

const fetchUserConversationById = async ({ conversationId }) => {
  const conversation = await selectUserConversationById({ conversationId });

  return { conversation };
};

module.exports = fetchUserConversationById;
