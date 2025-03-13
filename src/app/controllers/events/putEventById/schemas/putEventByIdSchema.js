const yup = require("yup");
const selectEventById = require("./queries/selectEventById");

const putEventByIdSchema = yup.object().shape({
  eventId: yup
    .number()
    .required("The event Id is required")
    .label("Event Id")
    .typeError("The Event Id must be a valid number")
    .test("DoesEventExist", "The event does not exist", async function test(
      eventId
    ) {
      const isEvent = await selectEventById({
        eventId
      });
      if (isEvent) return true;

      return false;
    })
});

module.exports = putEventByIdSchema;
