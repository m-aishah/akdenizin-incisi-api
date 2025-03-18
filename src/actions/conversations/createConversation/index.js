const { DEFAULT_PROMPT_ID } = require("~root/constants/conversationsConstants");
const insertConversation = require("./queries/insertConversation");

const createConversation = async ({
  conversationTitle,
  messages,
  systemPromptId = DEFAULT_PROMPT_ID,
  userId
}) => {
  const newConversationId = await insertConversation({
    conversationTitle,
    messages,
    systemPromptId,
    userId
  });

  return { newConversationId };
};

module.exports = createConversation;
