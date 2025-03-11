const fetchUserInformation = require("~root/actions/users/fetchUserInformation");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserInformation = async (req, res) => {
  const { user_id } = req.params;

  if (Number.isNaN(Number(user_id))) {
    return handleAPIError(res, new Error("Invalid user ID format"), 400);
  }

  try {
    const { user } = await fetchUserInformation({ user_id });

    return res.status(200).send({
      user
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getUserInformation;
