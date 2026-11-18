// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send({ msg: "Hello" });
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.status(201).send({ msg: "This is the Post method", received: req.body ?? "null" });
// });

// app.listen(3000, () => {
//   console.log("Server is running on Port 3000");
// });

// const morgan = require("morgan");
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("combined"));


const express = require("express");
const app = express();
app.use(express.json());

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(3000, () => {
  console.log("Server running on port 3000!");
});
