const fetchUserInformation = require("~root/actions/users/fetchUserInformation");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserInformation = async (req, res) => {
  const { user_id } = req.params;

  if (isNaN(user_id)) {
    return handleAPIError(res, new Error("User id should be an integer"));
  }

  try {
    const { user } = await fetchUserInformation({ user_id });

    res.status(200).send({
      user
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getUserInformation;
