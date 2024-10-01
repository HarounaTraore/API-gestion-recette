import { Router } from "express";
import RecetteController from "../controllers/RecetteController.js";
import {
  addRequestValidator,
  deleteRequestValidator,
  getByIdRequestValidator,
  updateRequestValidator,
} from "../Validator.js";
import RecetteModel from "../models/RecetteModel.js";

const router = Router();

router.get("/recettes", RecetteController.getRecettes);
router.get("/recettes/:id", getByIdRequestValidator, RecetteController.getById);

router.post("/recettes", addRequestValidator, RecetteController.createRecette);

router.put(
  "/recettes/:id",
  updateRequestValidator,
  RecetteController.updateRecette,
);

router.delete(
  "/recettes/:id",
  deleteRequestValidator,
  RecetteController.deleteRecette,
);

export default router;
