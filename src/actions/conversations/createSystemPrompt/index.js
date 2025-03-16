const insertSystemPrompt = require("./queries/insertSystemPrompt");

const createSystemPrompt = async ({ promptText, userId, isCustom = true }) => {
  const systemPromptId = await insertSystemPrompt({
    promptText,
    userId,
    isCustom
  });
  return systemPromptId;
};

module.exports = createSystemPrompt;
