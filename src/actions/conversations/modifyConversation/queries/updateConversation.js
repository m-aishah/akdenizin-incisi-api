const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const NO_UPDATE = Symbol("NO_UPDATE");

const updateConversation = async ({
  conversationId,
  conversationTitle = NO_UPDATE,
  messages = NO_UPDATE,
  systemPromptId = NO_UPDATE
}) => {
  const updates = [];
  if (conversationTitle !== NO_UPDATE) {
    updates.push(sql`conversation_title = ${conversationTitle}`);
  }
  if (messages !== NO_UPDATE) {
    updates.push(sql`messages = ${JSON.stringify(messages)}`);
  }
  if (systemPromptId !== NO_UPDATE) {
    updates.push(sql`system_prompt_id = ${systemPromptId}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
              UPDATE 
                  conversations
              SET 
                  ${updates.reduce(sqlReduce)}
                  WHERE 
                      conversation_id = ${conversationId}`;
  }

  return Promise.resolve();
};

module.exports = updateConversation;
