import dotenv from "dotenv";

dotenv.config();

import express from "express";

import sequelize from "./models/dbconfig.js";

import embedRoutes from "./routes/embedRoutes.js";

import Embed from "./models/embed.js";

// When set to true the existing database will be dropped on startup

sequelize.sync({ force: false });

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use("/api", embedRoutes.routes);

app.get("/", async (req, res) => {
  res.render("pages/index");
});

app.get("/e/:shortKey", async (req, res) => {

  Embed.findOne({ where: { shortKey: req.params.shortKey } })
    .then((embed) => {

      if (embed !== null) {

        console.log("Found embed", embed);

        let { title, image, redirect, description, siteName, color } = embed.dataValues;

        res.render("pages/embed", { title, image, redirect, description, siteName, color });

      } else {

        res.render("pages/embed404");
      }

    })
    .catch((err) => {
      console.log(err);
      res.render("pages/embed404");
    });
});

app.use(express.static("public"));

app.listen(process.env.PORT);

console.log("Running on localhost:", process.env.PORT);
