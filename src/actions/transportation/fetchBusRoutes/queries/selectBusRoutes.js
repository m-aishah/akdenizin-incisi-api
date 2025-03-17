const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBusRoutes = async ({ busId }) => submitQuery`
    SELECT 
        route_name, 
        departure_city_id, 
        arrival_city_id
    FROM routes
    WHERE JSON_CONTAINS(
        (SELECT routes FROM bus_services WHERE bus_service_id = ${busId}),
        CAST(route_id AS JSON)
    )
`;

module.exports = camelKeys(selectBusRoutes);
