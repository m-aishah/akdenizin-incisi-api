const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCarRentalById = async ({ carRentalId }) => submitQuery`
    SELECT
        name,
        description,
        rating,
        key_notes,
        website,
        phone_number,
        email,
        picture,
        headquarter_location,
        additional_info
    FROM
        car_rental_services
    WHERE 
        car_rental_service_id = ${carRentalId}
`;

module.exports = camelKeys(selectCarRentalById);
