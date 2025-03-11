const yup = require("yup");
const selectUserById = require("./queries/selectUserById");

const getUserInformationSchema = yup.object().shape({
  userId: yup
    .number()
    .required("The user Id is required")
    .label("User Id")
    .typeError("The User Id must be a valid number")
    .test("DoesUserExist", "The User does not exist", async function test(
      userId
    ) {
      const isUser = await selectUserById({
        userId
      });
      if (isUser) {
        return true;
      }

      return false;
    })
});
module.exports = getUserInformationSchema;
