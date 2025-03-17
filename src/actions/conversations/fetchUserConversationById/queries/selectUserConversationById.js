const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserConversationById = ({ conversationId }) => submitQuery`
    SELECT
        conversation_id,
        created_by,
        messages,
        system_prompt_id,
        created_at,
        updated_at,
    FROM
        conversations
    WHERE
        conversation_id = ${conversationId}
        AND is_deleted = FALSE;
`;

module.exports = camelKeys(selectUserConversationById);
