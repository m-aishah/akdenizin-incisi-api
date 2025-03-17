const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUserConversationById = ({ conversationId }) => submitQuery`
    SELECT
        conversation_id
    FROM
        conversations
    WHERE
        conversation_id = ${conversationId};`;

module.exports = getFirst(camelKeys(selectUserConversationById));
