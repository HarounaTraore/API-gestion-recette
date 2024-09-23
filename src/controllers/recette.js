import RecetteModel from '../models/RecetteModel.js';


export default class RecetteController {
  static async getRecetteById(req, res) {
    try {
      const { id } = req.params;
      const result = await RecetteModel.getElement(id);
      if (result.length === 0) {
        return res.status(404).json({ message: 'Recette non trouvée' });
      }
      res.json(result);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async getRecettes(req, res) {
    try {
      const results = await RecetteModel.getAllRecettes();
      res.json(results);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async createRecette(req, res) {
    try {
      const { titre, type, ingrédients } = req.body;
      const insertId = await RecetteModel.createRecette(titre, type, ingrédients);
      res.status(201).json({ message: "Recette ajoutée avec succès", id: insertId });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async updateRecette(req, res) {
    try {
      const { id } = req.params;
      const { titre, type, ingrédients } = req.body;
      await RecetteModel.updateRecette(id, titre, type, ingrédients);
      res.json({ message: "Recette mise à jour avec succès" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async deleteRecette(req, res) {
    try {
      const { id } = req.params;
      await RecetteModel.deleteRecette(id);
      res.json({ message: "Recette supprimée avec succès" });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  static async checkRecette(req, res) {
    try {
      const { titre } = req.body;
      const exists = await RecetteModel.checkRecette(titre);
      res.json({ exists });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
