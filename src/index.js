require("./config/db");
const express = require("express");
const app = express();
const { clearAndInsertData } = require("./models/user-data");
const baseRouter = require("./routes/baseRoutes");
const userRouter = require("./routes/userRoutes");

app.use(express.json());

clearAndInsertData();

app.use("/users", userRouter);
app.use("/", baseRouter);

const PORT = 4001;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: http://localhost:${PORT}`);
});
