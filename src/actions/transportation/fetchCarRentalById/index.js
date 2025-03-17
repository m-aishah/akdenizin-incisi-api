const selectCarRentalById = require("./queries/selectCarRentalById");

const fetchCarRentalById = async ({ carRentalId }) => {
  const carRental = await selectCarRentalById({ carRentalId });
  return { carRental };
};

module.exports = fetchCarRentalById;
