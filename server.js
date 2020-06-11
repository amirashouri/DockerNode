"use strict";

const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "https://amirreza-docker-node.herokuapp.com" || "127.0.0.1";

// App
const app = express();

const db = require("./models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    message: {
      title: "hello",
      user: "apple",
    },
  });
});

app.get("/secret", isAuthorized, (req, res) => {
  res.json({
    message: "Super Secret app",
  });
});

app.get("/readme", (req, res) => {
  res.json({
    message: "hello world",
  });
});

app.get("/jwt", (req, res) => {
  let privateKey = fs.readFileSync("./private.pem", "utf8");
  let token = jwt.sign({ body: "stuff" }, privateKey, { algorithm: "HS256" });
  res.send(token);
});

function isAuthorized(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
    let token = req.headers.authorization.split(" ")[1];
    let privateKey = fs.readFileSync("./private.pem", "utf8");

    jwt.verify(token, privateKey, { algorithms: "HS256" }, (err, decoded) => {
      if (err) {
        res.status(500).json({ error: "Not Authorized" });
      }

      console.log(decoded);
      return next();
    });
  } else {
    res.status(500).json({ error: "Not Authorized" });
  }
}

require("./routes/property.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, function() {
  console.log('Chat server running');
});
console.log(`Running on http://${HOST}:${PORT}`);
