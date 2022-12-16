const thoughtController = require("./thought-controller");
const userController = require("./user-controller");

router.use("/thought", thoughtController);
router.use("/user", userController);

modules.export = router;
