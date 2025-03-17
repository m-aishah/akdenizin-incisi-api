const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBusServices = async () => submitQuery`
    SELECT
        name,
        description,
        routes,
        rating,
        key_notes,
        website,
        phone_number,
        email,
        bus_service_picture,
        headquarter_location,
        additional_info
    FROM
        bus_services
`;

module.exports = camelKeys(selectBusServices);
