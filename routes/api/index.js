const thought = require("./thought-routes");
const user = require("./user-routes");
const router = require("express").Router();

router.use("/thought", thought);

module.exports = router;
