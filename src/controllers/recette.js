import { query } from '../db/db';

export function getRecettes(req, res) {
  const sql = 'SELECT * FROM recettes';
  query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
}

export function createRecette(req, res) {
  const { titre, type, ingrédients } = req.body;
  const sql = 'INSERT INTO recettes (titre, type, ingrédients) VALUES (?, ?, ?)';
  query(sql, [titre, type, ingrédients], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Recette ajoutée avec succès', id: result.insertId });
  });
}

export function updateRecette(req, res) {
  const { id } = req.params;
  const { titre, type, ingrédients } = req.body;
  const sql = 'UPDATE recettes SET titre = ?, type = ?, ingrédients = ? WHERE id = ?';
  query(sql, [titre, type, ingrédients, id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Recette mise à jour avec succès' });
  });
}

export function deleteRecette(req, res) {
  const { id } = req.params;
  const sql = 'DELETE FROM recettes WHERE id = ?';
  query(sql, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Recette supprimée avec succès' });
  });
}
