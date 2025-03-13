const { submitQuery, camelKeys } = require("~root/lib/database");

const deleteEvent = ({ eventId, userId }) => submitQuery`
    UPDATE events
    SET is_deleted = true, deleted_at = CURRENT_TIMESTAMP
    WHERE event_id = ${eventId}
    AND (created_by = ${userId} 
    OR ${userId} IN (
      SELECT user_id
      FROM users u JOIN user_types ut ON u.user_type_id = ut.user_type_id
      WHERE ut.user_type = 'admin'
    ))
`;

module.exports = deleteEvent;
