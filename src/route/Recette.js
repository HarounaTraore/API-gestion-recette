import { Router } from "express";

import Recette from "../controllers/Recette.js";
const router = Router();

router.get("/recettes", Recette.getRecettes);

router.post("/recettes", Recette.createRecette);

router.put("/recettes/:id", Recette.updateRecette);

router.delete("/recettes/:id", Recette.deleteRecette);

export default router;
