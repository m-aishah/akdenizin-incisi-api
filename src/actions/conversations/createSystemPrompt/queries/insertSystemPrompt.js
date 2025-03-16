const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSystemPrompt = async ({
  promptText,
  userId,
  conversationId,
  isCustom
}) =>
  submitQuery`
      INSERT INTO system_prompts (
        prompt_text,
        created_for
        conversation_id,
        is_custom

      )
      VALUES (
        ${promptText},
        ${userId},
        ${conversationId},
        ${isCustom}
      );
    `;

module.exports = getInsertId(insertSystemPrompt);
