import { pool } from "../db/db.js";

export default class RecetteModel {
  static async getById(id) {
    const con = await pool.getConnection();
    const [result] = await con.execute("SELECT * FROM recettes WHERE id = ?", [
      id,
    ]);

    return result;
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
      console.log(e.message);
    } finally {
      connection.release();
    }
  }

  static async createRecette(titre, type, ingredients) {
    const connection = await pool.getConnection();
    try {
      const sql =
        "INSERT INTO recettes (titre, type, ingredients) VALUES (?, ?, ?)";
      const [result] = await connection.execute(sql, [
        titre,
        type,
        ingredients,
      ]);
      return result;
    } catch (error) {
      console.log(error.message);
    } finally {
      connection.release();
    }
  }

  static async updateRecette(id, titre, type, ingredients) {
    const connection = await pool.getConnection();
    try {
      const sql =
        "UPDATE recettes SET titre = ?, type = ?, ingredients = ? WHERE id = ?";
      const [result] = await connection.execute(sql, [
        titre,
        type,
        ingredients,
        id,
      ]);
      return result;
    } catch (error) {
      console.log(error.message);
    } finally {
      connection.release();
    }
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
      console.log(e.message);
    } finally {
      connection.release();
    }
  }

  static async checkRecette(titre) {
    try {
      const connection = await pool.getConnection();
      const [result] = await connection.execute(
        "SELECT * FROM recettes WHERE titre = ?",
        [titre],
      );
      return result.length;
    } catch (error) {
      console.log(error);
    } finally {
      const connection = await pool.getConnection();
      const [result] = await connection.execute(
        "SELECT * FROM recettes WHERE titre = ?",
        [titre],
      );
      return result.length;
    }
  }
}
