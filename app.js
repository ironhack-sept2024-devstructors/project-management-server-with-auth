require("dotenv/config");
require("./db");
const express = require("express");

const app = express();

require("./config")(app);

// 👇 Start handling routes here

app.use("/api", require("./routes"));
app.use("/api", require("./routes/project.routes"));
app.use("/api", require("./routes/task.routes"));
app.use("/auth", require("./routes/auth.routes"));


require("./error-handling")(app);

module.exports = app;
