const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectEventById = ({ eventId }) => submitQuery`
    SELECT 
      event_id
    FROM events
    WHERE event_id = ${eventId}
`;

module.exports = getFirst(camelKeys(selectEventById));
