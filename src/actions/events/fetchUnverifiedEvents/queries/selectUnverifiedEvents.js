const { submitQuery, camelKeys } = require("~root/lib/database");

const selectUnverifiedEvents = () => submitQuery`
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
        is_verified = false
`;

module.exports = camelKeys(selectUnverifiedEvents);
