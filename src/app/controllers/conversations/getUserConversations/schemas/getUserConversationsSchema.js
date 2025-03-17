const yup = require("yup");

const getUserConversationsSchema = yup.object().shape({
  userId: yup
    .number()
    .required()
    .label("User ID")
    .typeError("User ID must be a number")
});

module.exports = getUserConversationsSchema;
