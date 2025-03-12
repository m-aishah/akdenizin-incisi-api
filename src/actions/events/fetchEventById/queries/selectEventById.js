const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectEventById = ({ eventId }) => submitQuery`
    SELECT event_id,
        created_by,
        is_verified,
        title,
        description,
        date,
        time,
        location,
        picture_url,
        age_limit,
        additional_info,
        created_at, 
        updated_at 
    FROM 
        events
    WHERE 
        is_verified = true
    AND event_id = ${eventId}
`;

module.exports = getFirst(camelKeys(selectEventById));
