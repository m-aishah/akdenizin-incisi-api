const { getFirst, submitQuery } = require("~root/lib/database");

const selectUserById = ({ userId }) => submitQuery`
    SELECT
        *
    FROM
        user
    WHERE
        user_id = ${userId}
`;

module.exports = getFirst(selectUserById);
