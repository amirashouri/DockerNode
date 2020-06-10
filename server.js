"use strict";

const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = process.env.IP || "64.74.162.69";

// App
const app = express();
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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
