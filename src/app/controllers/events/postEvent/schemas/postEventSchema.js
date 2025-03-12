const yup = require("yup");

const postEventSchema = yup.object().shape({
  title: yup
    .string()
    .strict()
    .required("The title is required")
    .label("Title")
    .typeError("The title must be a string"),
  description: yup
    .string()
    .strict()
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
    .strict()
    .required("The time is required")
    .label("Time")
    .typeError("The time must be a string"),
  location: yup
    .string()
    .strict()
    .required("The location is required")
    .label("Location")
    .typeError("The location must be a string")
});

module.exports = postEventSchema;
