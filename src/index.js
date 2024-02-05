require("./config/db");
const express = require("express");
const app = express();

app.use(express.json());

const PORT = 4001;
app.listen(PORT, (req, res) => {
  console.log(`Server listening on port: http://losalhost:${PORT}`);
});
