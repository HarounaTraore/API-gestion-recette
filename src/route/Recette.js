import { Router } from "express";
import RecetteController from "../controllers/RecetteController.js";
import {
  addRequestValidator,
  deleteRequestValidator,
  updateRequestValidator,
} from "../Validator.js";

const router = Router();

router.get("/recettes", RecetteController.getRecettes);

router.post("/recettes", addRequestValidator, RecetteController.createRecette);

router.put("/recettes/:id", updateRequestValidator, RecetteController.updateRecette);

router.delete("/recettes/:id", deleteRequestValidator, RecetteController.deleteRecette);

export default router;
