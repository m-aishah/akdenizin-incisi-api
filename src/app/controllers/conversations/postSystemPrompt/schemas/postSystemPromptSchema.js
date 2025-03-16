const yup = require("yup");
const selectUserById = require("./queries/selectUserById");

const postSystemPromptSchema = yup.object().shape({
  userId: yup
    .number()
    .required()
    .label("Uer ID")
    .typeError("User ID must be a number")
    .test("doesUserExist", "User must exist.", function test(userId) {
      return selectUserById({
        userId
      }).then(user => {
        if (user) {
          return true;
        }
        return false;
      });
    }),
  conversationId: yup
    .number()
    .required()
    .label("Conversation ID")
    .typeError("Conversation ID must be a number"),
  promptText: yup
    .string()
    .strict()
    .required("The prompt text is required")
    .label("Prompt Text")
    .typeError("The prompt text must be a string")
});

module.exports = postSystemPromptSchema;
