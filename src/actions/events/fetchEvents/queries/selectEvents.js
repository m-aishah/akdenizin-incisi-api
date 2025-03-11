const { submitQuery, camelKeys } = require("~root/lib/database");

const selectEvents = () => submitQuery`
    SELECT event_id,
        created_by,
        is_verified
        title,
        description,
        event_date,
        event_time,
        location,
        picture_url,
        age_limit,
        additonal_info,
        created_at, 
        updated_at 
    FROM 
        events
    WHERE 
        is_verified = true
`;

module.exports = camelKeys(selectEvents);
