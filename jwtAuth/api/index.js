const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: "1", username: "sarita", password: "45ggwsgr", isAdmin: true },
  { id: "2", username: "smruti", password: "45ggwhih8usgr", isAdmin: false },
];

app.post("/api/login", (req, res) =>
  //   const { username, password } = req.body;
  res.json("dshihi")
);
app.listen(5000, () => {
  console.log("Backend is running");
});
