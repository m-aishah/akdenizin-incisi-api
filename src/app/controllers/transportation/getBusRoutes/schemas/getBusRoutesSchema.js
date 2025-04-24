const yup = require("yup");

const getBusRoutesSchema = yup.object().shape({
  busId: yup
    .number()
    .required("Bus id is required")
    .label("Bus ID")
    .typeError("Bus ID must be a number")
});

module.exports = getBusRoutesSchema;
