const yup = require("yup");

const getBusServiceByIdSchema = yup.object().shape({
  busServiceId: yup
    .number()
    .required("BusServiceId is required")
    .label("Bus Service ID")
    .typeError("Bus Service ID must be a valid number")
    .positive("Bus Service ID should be a positive number")
    .integer("Bus Service ID should be an integer")
});

module.exports = getBusServiceByIdSchema;
