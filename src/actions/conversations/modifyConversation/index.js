const updateConversation = require("./queries/updateConversation");

const modifyConversation = async ({
  conversationId,
  conversationTitle,
  messages,
  systemPromptId,
  updatedAt
}) => {
  await updateConversation({
    conversationId,
    conversationTitle,
    messages,
    systemPromptId,
    updatedAt
  });

  return { conversationId };
};

module.exports = modifyConversation;
