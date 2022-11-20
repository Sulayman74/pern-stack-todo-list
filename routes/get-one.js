const express = require("express");
const router = express.Router();

const todo = require("../controllers/get-one-controller");

// ** get a specific todo/

router.get("/", todo.getOneTodo);

module.exports = router;
