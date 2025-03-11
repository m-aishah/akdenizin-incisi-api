const selectUserInformation = require("./queries/selectUserInformation");

const fetchUserInformation = async ({ userId }) => {
  const userInformation = await selectUserInformation({ userId });
  return { userInformation };
};

module.exports = fetchUserInformation;
