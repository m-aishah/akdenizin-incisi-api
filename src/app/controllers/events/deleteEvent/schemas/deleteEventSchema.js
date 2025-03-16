const yup = require("yup");

const deleteEventSchema = yup.object().shape({
  eventId: yup
    .number()
    .required("The event Id is required")
    .label("Event Id")
    .typeError("The Event Id must be a valid number")
});

module.exports = deleteEventSchema;
