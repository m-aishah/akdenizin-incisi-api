const express = require("express");

// const { ADMIN } = require("~root/constants/userTypes");
const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
// const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const putPassword = require("./controllers/password-recovery/putPassword");
const postRecoveryRequest = require("./controllers/password-recovery/postRecoveryRequest");
const healthcheck = require("./platform/healthcheck");
const getUserInformation = require("./controllers/users/getUserInformation");

const getEvents = require("./controllers/events/getEvents");
const getVerifiedEvents = require("./controllers/events/getVerifiedEvents");
const getUnverifiedEvents = require("./controllers/events/getUnverifiedEvents");
const getEventById = require("./controllers/events/getEventById");
const postEvent = require("./controllers/events/postEvent");
const putEventById = require("./controllers/events/putEventById");
const deleteEvent = require("./controllers/events/deleteEvent");

const getSystemPromptById = require("./controllers/conversations/getSystemPromptById");
const postSystemPrompt = require("./controllers/conversations/postSystemPrompt");
const getUserConversations = require("./controllers/conversations/getUserConversations");
const getUserConversationById = require("./controllers/conversations/getUserConversationById");

const getTaxiServices = require("./controllers/transportation/getTaxiServices");
const getTaxiServiceById = require("./controllers/transportation/getTaxiServiceById");
const getBusRoutes = require("./controllers/transportation/getBusRoutes");

const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);

router.post("/register", postUser);

router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.post("/recovery-request", postRecoveryRequest);

router.put("/update-password/:shortcode", putPassword);

router.get("/healthcheck", healthcheck);

router.get("/user-information", authentication, getUserInformation);

// EVENTS
router.get("/events", authentication, getEvents);

router.get("/verified-events", authentication, getVerifiedEvents);

router.get("/unverified-events", authentication, getUnverifiedEvents);

router.get("/event/:eventId", authentication, getEventById);

router.post("/event", authentication, postEvent);

router.put("/event/:eventId", authentication, putEventById);

router.delete("/event/:eventId", authentication, deleteEvent);

// CONVERSATIONS
// System Prompt
router.get(
  "/system-prompt/:systemPromptId",
  authentication,
  getSystemPromptById
);

router.post("/system-prompt", authentication, postSystemPrompt);

router.get("/conversations", authentication, getUserConversations);

router.get(
  "/conversation/:conversationId",
  authentication,
  getUserConversationById
);

// TRANSPORTATION
router.get("/taxi-services", authentication, getTaxiServices);

router.get("/taxi-service/:taxiServiceId", authentication, getTaxiServiceById);

router.get("/bus-routes/:busId", authentication, getBusRoutes);

module.exports = router;
