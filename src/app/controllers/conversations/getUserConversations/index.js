const handleAPIError = require("~root/utils/handleAPIError");
const fetchUserConversations = require("~root/actions/conversations/fetchUserConversations");
const getUserConversationsSchema = require("./schemas/getUserConversationsSchema");

const getUserConversations = async (req, res) => {
  const { userId } = req.user;

  try {
    await getUserConversationsSchema.validate(
      { userId },
      { abortEarly: false }
    );

    const conversations = await fetchUserConversations({ userId });

    return res.status(200).send({
      conversations
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getUserConversations;
