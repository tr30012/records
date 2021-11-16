const router = require("express").Router();
const controller = require("../controllers/auth.controller");
const logger = require("../middlewares/logger.middleware");
const auth = require("../middlewares/auth.middleware");

router.post("/register",  logger, controller.register);
router.post("/refresh", controller.refresh);
router.post("/login", logger, controller.login);
router.post("/logout", controller.logout);

module.exports = router;
