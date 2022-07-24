import Embed from "../models/embed.js";
import { nanoid } from "nanoid";

export const saveEmbed = async (req, res) => {
  const embed = {
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    redirect: req.body.redirect,
    siteName: req.body.siteName,
    shortKey: nanoid(10)
  };

  console.log(embed);

  await Embed.create(embed)
    .then(() => {
      res.json({
        status: 200,
        shortKey: embed.shortKey,
        message: "Embed created successfully"
      });
    })
    .catch((err) => {
      console.log(err);

      res.json({
        status: 400,
        message: "Failed to create embed"
      })
    });
};

export const getEmbed = async (req, res) => {
  
}
