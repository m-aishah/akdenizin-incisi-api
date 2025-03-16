const handleAPIError = require("~root/utils/handleAPIError");
const createSystemPrompt = require("~root/actions/conversations/createSystemPrompt");
const postSystemPromptSchema = require("./schemas/postSystemPromptSchema");

const postSystemPrompt = async (req, res) => {
  const { promptText, conversationId, userId } = req.body;

  try {
    await postSystemPromptSchema.validate(
      { promptText, conversationId, userId },
      { abortEarly: false }
    );

    const systemPromptId = await createSystemPrompt({
      promptText,
      conversationId,
      userId
    });

    return res.status(201).send({
      systemPromptId
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = postSystemPrompt;
