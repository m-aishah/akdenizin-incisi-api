const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectEventByVerificationId = ({ eventId }) => submitQuery`
    SELECT 
      event_id
    FROM events
    WHERE 
        is_verified = true
    AND event_id = ${eventId}
`;

module.exports = getFirst(camelKeys(selectEventByVerificationId));
