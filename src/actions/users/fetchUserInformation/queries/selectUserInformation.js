const { submitQuery, camelKeys, getFirst } = require("~root/lib/database");

const selectUserInformation = ({ user_id }) => submitQuery`
    SELECT
        user_id,
        first_name,
        last_name,
        password,
        email,
        bio,
        profile_picture_url,
        hobbies,
        user_types.user_type_id,
        user_types.user_type
    FROM users
    LEFT JOIN user_types ON users.user_type_id = user_types.user_type_id
    WHERE user_id = ${user_id};
`;

module.exports = getFirst(camelKeys(selectUserInformation));
