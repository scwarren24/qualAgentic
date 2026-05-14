const express = require("express");
const app = express();

app.use("/api", require("./routes"));

app.listen(3000);
