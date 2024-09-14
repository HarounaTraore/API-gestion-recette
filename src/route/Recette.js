import { Router } from "express";
import {
  createRecette,
  deleteRecette,
  getRecettes,
  updateRecette,
} from "../controllers/recette.js";
const router = Router();

router.get("/recettes", getRecettes);

router.post("/recettes", createRecette);

router.put("/recettes/:id", updateRecette);

router.delete("/recettes/:id", deleteRecette);

export default router;
