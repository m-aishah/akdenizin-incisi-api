const { submitQuery, camelKeys } = require("~root/lib/database");

const selectCarRentals = async () => submitQuery`
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
`;

module.exports = camelKeys(selectCarRentals);
