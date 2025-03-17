const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUserConversationById = ({ eventId }) => submitQuery`
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
        conversation_id = ${eventId}
    AND 
        is_deleted = FALSE;
`;

module.exports = getFirst(camelKeys(selectUserConversationById));
