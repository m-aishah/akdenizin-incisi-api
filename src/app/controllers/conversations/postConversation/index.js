const handleAPIError = require("~root/utils/handleAPIError");
const generateConversationTitle = require("~root/utils/chat/generateConversationTitle");
const {
  DEFAULT_PROMPT_ID,
  MINIMUM_MESSAGE_COUNT_TO_GENERATE_TITLE
} = require("~root/constants/conversationsConstants");
const chat = require("~root/utils/chat");
const createConversation = require("~root/actions/conversations/createConversation");
const modifyConversation = require("~root/actions/conversations/modifyConversation");
const postConversationSchema = require("./schemas/postConversationSchema");

const createOrUpdateConversation = async ({
  conversationId,
  conversationTitle,
  messages,
  systemPromptId = DEFAULT_PROMPT_ID,
  userId
}) => {
  let generatedConversationTitle = conversationTitle;

  if (
    messages.length < MINIMUM_MESSAGE_COUNT_TO_GENERATE_TITLE ||
    !conversationId
  ) {
    // generatedConversationTitle = "Places to visit in Kyrenia";
    generatedConversationTitle = await generateConversationTitle(messages);
  }

  if (conversationId) {
    const finalConversationId = await modifyConversation({
      conversationId,
      conversationTitle: generatedConversationTitle,
      messages,
      systemPromptId
    });
    return { finalConversationId };
  }

  const { newConversationId } = await createConversation({
    conversationTitle: generatedConversationTitle,
    messages,
    systemPromptId,
    userId
  });

  return { finalConversationId: newConversationId };
};

const postConversation = async (req, res) => {
  const { userId } = req.user;
  const {
    conversationTitle,
    messages,
    systemPromptId,
    conversationId
  } = req.body;

  try {
    postConversationSchema.validate(
      { userId, conversationId, conversationTitle, messages, systemPromptId },
      { abortEarly: false }
    );

    const { updatedMessages } = await chat({
      // TODO: Update method of getting response from chatbot to SSE
      conversationTitle,
      messages,
      systemPromptId
    });

    const { finalConversationId } = await createOrUpdateConversation({
      conversationId,
      conversationTitle,
      messages: updatedMessages,
      systemPromptId,
      userId
    });

    res.status(201).json({ conversationId: finalConversationId }); // TODO: Update method of sending data to SSE
  } catch (error) {
    handleAPIError(res, error);
  }
};

module.exports = postConversation;
