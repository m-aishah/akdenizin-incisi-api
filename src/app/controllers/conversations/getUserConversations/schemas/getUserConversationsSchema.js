const yup = require("yup");

const getUserConversationsSchema = yup.object().shape({
  userId: yup.number().required()
});

module.exports = getUserConversationsSchema;
