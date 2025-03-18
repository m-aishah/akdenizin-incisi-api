const yup = require("yup");

const postConversationSchema = yup.object().shape({
  userId: yup
    .number()
    .label("User ID")
    .required("UserID is required")
    .typeError("UserID must be a number"),
  conversationId: yup
    .number()
    .label("Conversation Id")
    .typeError("Conversation ID must be a number"),
  conversationTitle: yup.string().label("Conversation Title"),
  messages: yup.array().label("Messages"),
  systemPromptId: yup.number().label("System Prompt")
});

module.exports = postConversationSchema;
