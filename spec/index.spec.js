import Recette from "../src/models/RecetteModel.js"; 

describe("Recette tests", () => {
  let recetteId = null;

  
  it("can be created", async () => {
    const recette = { titre: "crepe", type: "dessert", ingredients: "farine" };
    const result = await Recette.createRecette(
      recette.titre,
      recette.type,
      recette.ingredients
    );
    
    recetteId = result.insertId;
    expect(recetteId).not.toBeNull();
        
    const recetteCreated = await Recette.getById(recetteId);
    expect(recetteCreated).not.toBeNull();
    
  });


//   // Test de mise à jour d'une recette
  it("can be updated", async () => {
    const updatedRecette = {titre: "gâteau", type: "dessert", ingrédients: "farine, sucre" };
    
    const updateResult = await Recette.updateRecette(recetteId, updatedRecette.titre, updatedRecette.type, updatedRecette.ingrédients);
    
    expect(updateResult.affectedRows).toBe(1);
    const recetteUpdated = await Recette.getById(recetteId);
    expect(recetteUpdated[0].titre).toBe(updatedRecette.titre);
      
   
  });

//   // Test de récupération de toutes les recettes
  it("can get all recipes", async () => {
    const allRecettes = await Recette.getAllRecettes();
    
    expect(allRecettes).not.toBeNull();
    expect(allRecettes.length).toBeGreaterThan(0);
  });

  // Test de suppression d'une recette
  it("can be deleted", async () => {
    const result = await Recette.deleteRecette(recetteId);

    expect(result.affectedRows).toEqual(1);

  });
});
