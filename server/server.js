const express = require("express");
const app = express();

require("dotenv").config();

app.use("/contacts", require("./routes/contactRoute"));

app.use("/meals", require("./routes/mealsRoute"));

app.get("/", (req, res) => {
  res.send("API is running... ");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server is running at " + port));
