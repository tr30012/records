const router = require("express").Router();

const authRoute = require("./auth.route");
const postRoute = require("./post.route");
const userRoute = require("./user.route");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/posts", postRoute);

module.exports = router;