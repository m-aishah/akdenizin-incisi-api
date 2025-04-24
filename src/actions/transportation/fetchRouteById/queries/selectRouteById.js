const { submitQuery, camelKeys } = require("~root/lib/database");

const selectRouteById = async ({ routeId }) => submitQuery`
    SELECT
        route_name,
        departure_city_id,
        arrival_city_id
    FROM
        routes
    WHERE 
        route_id = ${routeId};
`;

module.exports = camelKeys(selectRouteById);
