const router = require("express").Router();
const {findAllThoughts,} = require("../../controllers/thought-controller")


router.use("/").get(findAllThoughts)