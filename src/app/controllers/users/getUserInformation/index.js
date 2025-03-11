const fetchUserInformation = require("~root/actions/users/fetchUserInformation");
const handleAPIError = require("~root/utils/handleAPIError");
const { NOT_FOUND } = require("~root/constants/HttpStatusCodes");

const getUserInformation = async (req, res) => {
  const { user_id } = req.params;

  try {
    const { user } = await fetchUserInformation({ user_id });

    if (!user) {
      return res.status(NOT_FOUND).send(`User with ID ${user_id} not found`);
    }

    res.status(200).send({
      user
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getUserInformation;
