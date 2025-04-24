const yup = require("yup");

const getRouteByIdSchema = yup.object().shape({
  routeId: yup
    .number()
    .required("Route id is requred")
    .typeError("Route ID must be a number")
    .integer("Route ID must be an integer")
    .positive("Route ID must be a positive ineteger")
});

module.exports = getRouteByIdSchema;
