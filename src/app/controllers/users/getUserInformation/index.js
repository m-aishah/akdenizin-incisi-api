const yup = require("yup");
const fetchUserInformation = require("~root/actions/users/fetchUserInformation");
const getUserInformationSchema = require("./schemas/getUserInformationSchema");
const handleAPIError = require("~root/utils/handleAPIError");

const getUserInformation = async (req, res) => {
  const { userId } = req.user;

  try {
    await getUserInformationSchema.validate({ userId }, { abortEarly: true });

    const { userInformation } = await fetchUserInformation({ userId });
    return res.status(200).send({
      userInformation
    });
  } catch (err) {
    return handleAPIError(res, err);
  }
};

module.exports = getUserInformation;
