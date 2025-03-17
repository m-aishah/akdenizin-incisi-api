const yup = require("yup");

const getTaxiServiceByIdSchema = yup.object().shape({
  taxiServiceId: yup
    .number()
    .required()
    .label("Taxi Service Id")
    .typeError("Taxi Service Id must be a valid number")
});

module.exports = getTaxiServiceByIdSchema;
