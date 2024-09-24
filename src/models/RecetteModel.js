import { pool } from "../db/db.js";

export default class RecetteModel {
  static async getById(id) {
   
      const con = await pool.getConnection();
      const [result] = await con.execute(
        "SELECT * FROM recettes WHERE id = ?",
        [id],
      );
      
      return result.length;
    
  }

  static async getAllRecettes() {
    const connection = await pool.getConnection();
    const sql = "SELECT * FROM recettes";
    try {
      const [results] = await connection.execute(sql);
      connection.release();
      return results;
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }

  static async createRecette(titre, type, ingrédients) {
    const connection = await pool.getConnection();
      const sql =
        "INSERT INTO recettes (titre, type, ingrédients) VALUES (?, ?, ?)";
       await connection.execute(sql, [
        titre,
        type,
        ingrédients,
      ]);
      return true;
  }

  static async updateRecette(id, titre, type, ingredients) {
    const connection = await pool.getConnection();
      const sql =
        "UPDATE recettes SET titre = ?, type = ?, ingrédients = ? WHERE id = ?";
       await connection.execute(sql, [
        titre,
        type,
        ingredients,
        id,
      ]);
      return true;
  }

  static async deleteRecette(id) {
    const connection = await pool.getConnection();
    try {
      const sql = "DELETE FROM recettes WHERE id = ?";
      const [result] = await connection.execute(sql, [id]);
      connection.release();
      return result;
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }

  static async checkRecette(titre) {
    const connection = await pool.getConnection();
      const [result] = await connection.execute(
        "SELECT * FROM recettes WHERE titre = ?",
        [titre],
      );
      return result.length;
  }
}

