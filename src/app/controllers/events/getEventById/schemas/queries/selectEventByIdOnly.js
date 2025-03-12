const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectEventByIdOnly = ({ eventId }) => submitQuery`
    SELECT 
      event_id
    FROM events
    WHERE event_id = ${eventId}
`;

module.exports = getFirst(camelKeys(selectEventByIdOnly));
