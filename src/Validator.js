import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import RecetteModel from "./models/RecetteModel.js";

const getByIdRequestValidator = [
  param("id").custom(async (value) => {
    const result = await RecetteModel.getById(value);
    if (result == 0) {
      throw new Error("Cette recette n'existe pas!");
    }
    return true;
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array().map((error) => error.msg) });
    next();
  },
];
const addRequestValidator = [
  check("titre")
    .not()
    .isEmpty()
    .withMessage("Titre est oblgatoire")
    .bail()

    .isLength({ min: 5, max: 100 })
    .withMessage("Minimun 5 caractères requis et maximum 100 caractères!")
    .bail()

    .custom(async (value) => {
      const result = await RecetteModel.checkRecette(value);
      if (result !== 0) {
        throw new Error("Deux recettes ne peuvent pas avoir même titre!");
      }
      return true;
    }),
  check("ingredients")
    .notEmpty()
    .withMessage("Ingrédients est obligatoire!")
    .bail()
    .isLength({ min: 10, max: 500 })
    .withMessage("Ingrédients doit avoir entre 10 et 500 caractères!")
    .bail(),
  check("type")
    .notEmpty()
    .withMessage("Type est Obligatoire!")
    .bail()
    .isIn(["Plat", "plat", "Dessert", "dessert", "Entrée", "entrée"])
    .withMessage("Le type doit être Plat, Dessert ou Entrée!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array().map((error) => error.msg) });
    next();
  },
];

const updateRequestValidator = [
  param("id")
    .notEmpty()
    .withMessage("Id est requis!")
    .bail()
    .custom(async (value) => {
      const result = await RecetteModel.getById(value);
      if (result === 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),
  check("titre")
    .notEmpty()
    .withMessage("Titre ne doit pas être vide")
    .bail()
    .isLength({ min: 5, max: 100 })
    .withMessage("Minimun 5 caractères requis et maximum 100 caractères!")
    .bail()
    .custom(async (value) => {
      const result = await RecetteModel.checkRecette(value);
      if (result !== 0) {
        throw new Error("Cette recette existe déjà!");
      }
      return true;
    })
    .bail(),
  check("ingredients")
    .notEmpty()
    .withMessage("Ingrédients ne peut pas être vide!")
    .bail()
    .isLength({ min: 10, max: 500 })
    .withMessage("Ingrédients doit avoir entre 10 et 500 caractères!")
    .bail(),
  check("type")
    .notEmpty()
    .withMessage("Type est Obligatoire!")
    .bail()
    .isIn(["Plat", "plat", "Dessert", "dessert", "Entrée", "entrée"])
    .withMessage("Le type doit être Plat, Dessert ou Entrée!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array().map((error) => error.msg) });
    next();
  },
];
const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id est obligatoire !")
    .bail()
    .custom(async (value) => {
      const result = await RecetteModel.getById(value);
      if (result == 0) {
        throw new Error("Cette recette n'existe pas!");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array().map((error) => error.msg) });
    next();
  },
];

export {
  addRequestValidator,
  updateRequestValidator,
  deleteRequestValidator,
  getByIdRequestValidator,
};
