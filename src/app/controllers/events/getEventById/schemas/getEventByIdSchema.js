const yup = require("yup");
const selectEventByIdOnly = require("./queries/selectEventByIdOnly");
const selectEventByVerificationId = require("./queries/selectEventByVerificationId");

const getEventByIdSchema = yup.object().shape({
  eventId: yup
    .number()
    .required("The event Id is required")
    .label("Event Id")
    .typeError("The Event Id must be a valid number")
    .test("DoesEventExist", "The event does not exist", async function test(
      eventId
    ) {
      const isEvent = await selectEventByIdOnly({
        eventId
      });
      if (isEvent) return true;

      return false;
    })
    .test("IsEventVeried", "The event is not verified", async function test(
      eventId
    ) {
      const isEventVerified = await selectEventByVerificationId({
        eventId
      });
      if (isEventVerified) return true;

      return false;
    })
});

module.exports = getEventByIdSchema;
