import Recette from "../src/models/RecetteModel.js";

describe("Recette tests", () => {
  let recetteId = null;

  it("can be created", async () => {
    const recette = { titre: "crepe", type: "dessert", ingredients: "farine" };
    const result = await Recette.createRecette(
      recette.titre,
      recette.type,
      recette.ingredients,
    );

    recetteId = result.insertId;
    expect(result).toEqual(true)

  });

  //   // Test de mise à jour d'une recette
  it("can be updated", async () => {
    const updatedRecette = {
      titre: "gâteau",
      type: "dessert",
      ingrédients: "farine, sucre",
    };

    const updateResult = await Recette.updateRecette(
      6,
      updatedRecette.titre,
      updatedRecette.type,
      updatedRecette.ingrédients,
    );

    expect(updateResult).toBe(true);
  });

  //   // Test de récupération de toutes les recettes
  it("can get all recipes", async () => {
    const allRecettes = await Recette.getAllRecettes();

    expect(allRecettes).not.toBeNull();
    expect(allRecettes.length).toBeGreaterThan(0);
  });

  // Test de suppression d'une recette
  it("can be deleted", async () => {
    const result = await Recette.deleteRecette(8);

    expect(result.affectedRows).toEqual(1);
  });
});
