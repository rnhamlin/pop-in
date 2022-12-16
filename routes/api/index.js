const thought = require("./thought-routes");
const user = require("./user-routes");
const router = require("express").Router();

router.use("/thought", thought);
router.use("/user", user);

module.exports = router;
