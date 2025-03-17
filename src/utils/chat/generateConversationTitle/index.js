const generateOpenRouterResponse = require("~root/services/openRouter/getOpenRouterResponse");
const {
  TITLE_GENERATION_PROMPT
} = require("~root/constants/conversationsConstants");
const constructNewMessage = require("../constructNewMessage");

// TODO: Better handle the generateConversationTitle functionality
const generateConversationTitle = async messages => {
  const promptMessage = constructNewMessage({
    role: "system",
    content: TITLE_GENERATION_PROMPT
  });
  const openRouterResponse = await generateOpenRouterResponse({
    messages: [promptMessage, ...messages]
  });

  if (openRouterResponse.success) {
    const { aiMessage } = openRouterResponse;
    const generatedConversationTitle =
      aiMessage.length > 0 ? aiMessage : "Untitled Conversation";
    return generatedConversationTitle;
  }
  return "Untitled Conversation"; // TODO: This should not be happening!
};

module.exports = generateConversationTitle;
