const express = require("express");
const app = express();
const MainRouter = require("./routes");

const PORT = process.env.PORT || 8080;
app.listen(PORT);
app.use(MainRouter);
