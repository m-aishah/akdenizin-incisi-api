const { submitQuery, camelKeys } = require("~root/lib/database");

const selectAllRoutes = async () => submitQuery`
    SELECT
        route_name,
        departure_city_id,
        arrival_city_id
    FROM
        routes
`;

module.exports = camelKeys(selectAllRoutes);
