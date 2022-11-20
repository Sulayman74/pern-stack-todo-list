const express = require("express");
const router = express.Router();

const getAll = require("../controllers/get-all-controller");

//** get all the todos */
router.get("/", getAll.getAllTodos);

module.exports = router;
