import { pool } from "../db/db.js";

// Fonction pour récupérer les recettes
export async function getRecettes(req, res) {
  const connection = await pool.getConnection();
  const sql = "SELECT * FROM recettes";
  try {
    const [results] = await connection.execute(sql);
    res.json(results);
  } catch (e) {
    throw e;
  } finally {
    connection.release();
  }
}

// Fonction pour créer une nouvelle recette
export async function createRecette(req, res) {
  try {
    const connection = await pool.getConnection();
    const { titre, type, ingrédients } = req.body;
    const sql =
      "INSERT INTO recettes (titre, type, ingrédients) VALUES (?, ?, ?)";

    const [result] = await connection.execute(sql, [titre, type, ingrédients]);

    res.json({ message: "Recette ajoutée avec succès", id: result.insertId });
  } catch (e) {
    throw e;
  } finally {
    connection.release();
  }
}

// Fonction pour mettre à jour une recette
export async function updateRecette(req, res) {
  try {
    const connection = await pool.getConnection();
    const { id } = req.params;
    const { titre, type, ingrédients } = req.body;
    const sql =
      "UPDATE recettes SET titre = ?, type = ?, ingrédients = ? WHERE id = ?";
    await connection.execute(sql, [titre, type, ingrédients, id]);

    res.json({ message: "Recette mise à jour avec succès" });
  } catch (e) {
    throw e;
  }
}

// Fonction pour supprimer une recette
export async function deleteRecette(req, res) {
  try {
    const connection = await pool.getConnection();
    const { id } = req.params;
    const sql = "DELETE FROM recettes WHERE id = ?";
    await connection.execute(sql, [id]);
    res.json({ message: "Recette supprimée avec succès" });
  } catch (e) {
    e;
  }
}
