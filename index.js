const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5050;
const pool = require("./config"); // SERIAL permet l'incrementation auto pour un id unique

// ? middleware
app.use(cors());
app.use(express.json()); //?req.body
app.connect(pool);

//! ROUTES

const deleteRouter = require("./routes/delete");
const getAllRouter = require("./routes/get-all");
const oneTodoRouter = require("./routes/get-one");
const postsRouter = require("./routes/posts");
const updateRouter = require("./routes/update");

app.use("/api/todos/create", postsRouter);
app.use("/api/todos/allTodos", getAllRouter);
app.use("/api/todos/one/:id", oneTodoRouter);
app.use("/api/todos/delete/:id", deleteRouter);
app.use("/api/todos/update/:id", updateRouter);

app.listen(PORT || null, () => {
  console.log(`serveur lancé sur le port ${PORT}`);
});
