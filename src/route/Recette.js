import { Router } from "express";

import Recette from "../controllers/Recette.js";
import { addRequestValidator, deleteRequestValidator } from "../Validator.js";
const router = Router();


router.get("/recettes", Recette.getRecettes);

router.post("/recettes", addRequestValidator, Recette.createRecette);

router.put("/recettes/:id", deleteRequestValidator, Recette.updateRecette);

router.delete("/recettes/:id", deleteRequestValidator, Recette.deleteRecette);

export default router;
