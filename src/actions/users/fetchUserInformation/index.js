const selectUserInformation = require("./queries/selectUserInformation");

const fetchUserInformation = async ({ user_id }) => {
  const user = await selectUserInformation({ user_id });
  if (!user) {
    throw new Error(`User with ID ${user_id} not found`);
  }
  return { user };
};

module.exports = fetchUserInformation;
