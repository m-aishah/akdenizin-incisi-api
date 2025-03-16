const { submitQuery, getInsertId } = require("~root/lib/database");

const insertSystemPrompt = async ({ promptText, userId, isCustom }) =>
  submitQuery`
      INSERT INTO system_prompts (
        prompt_text,
        created_for,
        is_custom

      )
      VALUES (
        ${promptText},
        ${userId},
        ${isCustom}
      );
    `;

module.exports = getInsertId(insertSystemPrompt);
