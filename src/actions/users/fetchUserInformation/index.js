const selectUserInformation = require("./queries/selectUserInformation");

const fetchUserInformation = async ({ user_id }) => {
  const user = await selectUserInformation({ user_id });
  return { user };
};

module.exports = fetchUserInformation;
