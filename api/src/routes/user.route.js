const router = require("express").Router();
const controller = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");
const logger = require("../middlewares/logger.middleware");

router.delete("/:id", logger, auth, controller.delete);
router.put("/:id", logger, auth, controller.update);
router.get("/:id", logger, auth, controller.get);

module.exports = router;