const router = require("express").Router();
const controller = require("../controllers/post.controller");
const auth = require("../middlewares/auth.middleware");
const logger = require("../middlewares/logger.middleware");

router.post("/", logger, auth, controller.create);
router.put("/:id", logger, auth, controller.update);
router.delete("/:id", logger, auth, controller.delete);
router.get("/", logger, auth, controller.getall);
router.get("/:id", logger, auth, controller.get);

module.exports = router;