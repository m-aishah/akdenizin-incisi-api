const { submitQuery, camelKeys } = require("~root/lib/database");

const selectTaxiServiceById = async ({ taxiServiceId }) => submitQuery`
        SELECT 
            taxi_service_id,
            name,
            description,
            rating,
            website,
            phone_number,
            email,
            headquarter_location,
            picture,
            additional_info
        FROM 
            taxi_services
        WHERE 
            taxi_service_id = ${taxiServiceId}
`;

module.exports = camelKeys(selectTaxiServiceById);
