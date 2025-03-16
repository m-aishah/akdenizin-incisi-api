const insertSystemPrompt = require("./queries/insertSystemPrompt");

const createSystemPrompt = async ({
  promptText,
  userId,
  conversationId,
  isCustom = true
}) => {
  const systemPromptId = await insertSystemPrompt({
    promptText,
    userId,
    conversationId,
    isCustom
  });
  return systemPromptId;
};

module.exports = createSystemPrompt;
