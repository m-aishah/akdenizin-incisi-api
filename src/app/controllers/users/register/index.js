const createUser = require("~root/actions/users/createUser");
const handleAPIError = require("~root/utils/handleAPIError");
const postUserSchema = require("./schemas/postUserSchema");
const jwt = require("jsonwebtoken");

const postUser = async (req, res) => {
  const { firstName, lastName, email, password, userTypeId } = req.body;

  try {
    await postUserSchema.validate(
      {
        firstName,
        lastName,
        email,
        password,
        userTypeId
      },
      {
        abortEarly: false
      }
    );

    const { user } = await createUser({
      firstName,
      lastName,
      email,
      password,
      userTypeId
    });

    if (user) {
      const accessToken = jwt.sign({ ...user }, process.env.JWT_SECRET, {
        expiresIn: "365d" // 1 year
      });

      res.status(201).json({
        accessToken,
        user
      });
    }
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postUser;
