const yup = require("yup");

const getCarRentalByIdSchema = yup.object().shape({
  carRentalId: yup
    .number()
    .required("The car rental Id is required")
    .label("Car Rental Id")
    .typeError("Car Rental Id must be a valid number")
    .positive("Car Rental Id must be a positive number")
});

module.exports = getCarRentalByIdSchema;
