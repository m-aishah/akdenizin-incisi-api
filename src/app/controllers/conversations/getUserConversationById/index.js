const handleAPIError = require("~root/utils/handleAPIError");
const fetchUserConversationById = require("~root/actions/conversations/fetchUserConversationById");
const getUserConversationByIdSchema = require("./schemas/getUserConversationByIdSchema");

const getUserConversationById = async (req, res) => {
  const { conversationId } = req.params;

  try {
    await getUserConversationByIdSchema.validate(
      { conversationId },
      { abortEarly: false }
    );

    const { conversation } = await fetchUserConversationById({
      conversationId
    });

    return res.status(200).send({
      conversation
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getUserConversationById;
