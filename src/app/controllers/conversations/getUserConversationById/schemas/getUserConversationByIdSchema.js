const yup = require("yup");
const selectUserConversationById = require("./queries/selectUserConversationById");

const getUserConversationByIdSchema = yup.object().shape({
  conversationId: yup
    .number()
    .required("Conversation ID is required")
    .label("Conversation ID")
    .typeError("conversationId must be a number")
    .test(
      "DoesConversationExist",
      "The conversation does not exist",
      async function test(conversationId) {
        const isConversation = await selectUserConversationById({
          conversationId
        });
        if (isConversation) return true;

        return false;
      }
    )
});

module.exports = getUserConversationByIdSchema;
