const yup = require("yup");

const putEventByIdSchema = yup.object().shape({
  title: yup
    .string()
    .required("The title is required")
    .label("Title")
    .typeError("The title must be a string"),
  description: yup
    .string()
    .required("The description is required")
    .label("Description")
    .typeError("The description must be a string"),
  date: yup
    .date()
    .required("The date is required")
    .label("Date")
    .typeError("The date must be a valid date"),
  time: yup
    .string()
    .required("The time is required")
    .label("Time")
    .typeError("The time must be a string"),
  location: yup
    .string()
    .required("The location is required")
    .label("Location")
    .typeError("The location must be a string")
});

module.exports = putEventByIdSchema;
