const { submitQuery, camelKeys } = require("~root/lib/database");

const selectTaxiServices = async () => submitQuery`
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
        FROM taxi_services
`;

module.exports = camelKeys(selectTaxiServices);
