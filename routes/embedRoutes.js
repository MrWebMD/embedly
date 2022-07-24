import Router from "express";

import { saveEmbed, getEmbed } from "../controllers/embedController.js";

const router = Router();

router.post("/embed", saveEmbed);

export default {
  routes: router,
};
