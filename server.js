const express = require("express");
const authRoute = require("./routes/auth.route");

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
