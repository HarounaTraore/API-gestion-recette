import { check, param, validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import Recette from "./controllers/Recette.js";

const addRequestValidator = [
  check("titre")
    .not()
    .isEmpty()
    .withMessage("Titre est oblgatoire")
    .bail()

    .isLength({ min: 3 })
    .withMessage("Minimun 3 caractère requis!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ errors: errors.array() });
    next();
  },
];

const deleteRequestValidator = [
  param("id")
    .not()
    .isEmpty()
    .withMessage("Id est obligatoire !")
    .bail()
    .customSanitizer(async (value, { req }) => {
      const result = await Recette.getElement(value);
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
        .json({ errors: errors.array() });
    next();
  },
];

export { addRequestValidator, deleteRequestValidator };
