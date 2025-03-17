const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUserConversations = ({ userId }) => submitQuery`
    SELECT
        conversation_id,
        conversation_title,
        created_by,
        created_at,
        updated_at
    FROM
        conversations
    WHERE
        created_by = ${userId}
        AND is_deleted = FALSE;
`;

module.exports = camelKeys(selectUserConversations);
