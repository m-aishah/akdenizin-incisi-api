const { submitQuery, getInsertId } = require("~root/lib/database");

const insertConversation = async ({
  conversationTitle,
  messages,
  systemPromptId,
  userId
}) =>
  submitQuery`
      INSERT INTO conversations (
        conversation_title,
        created_by,
        system_prompt_id,
        messages
      )
      VALUES (
        ${conversationTitle},
        ${userId},
        ${systemPromptId},
        ${JSON.stringify(messages)}
      );
    `;

module.exports = getInsertId(insertConversation);
