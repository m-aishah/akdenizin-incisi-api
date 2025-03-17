const { DEFAULT_PROMPT } = require("~root/constants/conversationsConstants");

const constructNewMessage = require("~root/utils/chat/constructNewMessage");
const generateOpenRouterResponse = require("~root/services/openRouter/getOpenRouterResponse");

// TODO:
// STop using default System Prompt - get the approprate prompt by ID
// Using streaming functionality in openrouter -> https://openrouter.ai/docs/api-reference/streaming
// Implement the streaming functionality in the chat function
// replace the function header with:
// const chat = async ({ conversationTitle, messages, systemPromptId }) => {

const chat = async ({ messages }) => {
  const promptMessage = constructNewMessage({
    role: "system",
    content: DEFAULT_PROMPT
  });

  const openRouterResponse = await generateOpenRouterResponse({
    messages: [promptMessage, ...messages]
  });

  if (openRouterResponse.success) {
    const assistantMessage = constructNewMessage({
      role: "assistant",
      content: openRouterResponse.aiMessage
    });
    const updatedMessages = [...messages, assistantMessage];
    return { updatedMessages };
  }

  throw new Error(openRouterResponse.error);
};

module.exports = chat;
