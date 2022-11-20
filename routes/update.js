const express = require("express");
const router = express.Router();

const update = require("../controllers/update-controller");

router.put("/", update.updateTodo);

module.exports = router;
