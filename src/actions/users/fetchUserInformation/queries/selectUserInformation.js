const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUserInformation = ({ userId }) => submitQuery`
    SELECT
        user_id,
        first_name,
        last_name,
        email,
        bio,
        profile_picture_url,
        hobbies,
        user_types.user_type_id,
        user_types.user_type
    FROM users
    LEFT JOIN user_types ON users.user_type_id = user_types.user_type_id
    WHERE user_id = ${userId};
`;

module.exports = getFirst(camelKeys(selectUserInformation));
