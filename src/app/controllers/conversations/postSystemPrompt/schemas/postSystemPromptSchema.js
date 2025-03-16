const yup = require("yup");

const postSystemPromptSchema = yup.object().shape({
  userId: yup
    .number()
    .required()
    .label("Uer ID")
    .typeError("User ID must be a number"),
  promptText: yup
    .string()
    .strict()
    .required("The prompt text is required")
    .label("Prompt Text")
    .typeError("The prompt text must be a string")
});

module.exports = postSystemPromptSchema;
