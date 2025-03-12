const { submitQuery, camelKeys } = require("~root/lib/database");

const selectEvents = () => submitQuery`
    SELECT event_id,
        created_by,
        is_verified
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
`;

module.exports = camelKeys(selectEvents);
