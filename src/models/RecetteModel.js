import { pool } from "../db/db.js";

export default class RecetteModel {
  static async getElement(id) {
    try {
      const con = await pool.getConnection();
      const [result] = await con.execute(
        "SELECT * FROM recettes WHERE id = ?",
        [id]
      );
      con.release();
      return result;
    } catch (e) {
      throw new Error(e.message);
    }
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
    try {
      const sql =
        "INSERT INTO recettes (titre, type, ingrédients) VALUES (?, ?, ?)";
      const [result] = await connection.execute(sql, [titre, type, ingrédients]);
      connection.release();
      return result.insertId;
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }

  static async updateRecette(id, titre, type, ingrédients) {
    const connection = await pool.getConnection();
    try {
      const sql =
        "UPDATE recettes SET titre = ?, type = ?, ingrédients = ? WHERE id = ?";
      await connection.execute(sql, [titre, type, ingrédients, id]);
      connection.release();
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }

  static async deleteRecette(id) {
    const connection = await pool.getConnection();
    try {
      const sql = "DELETE FROM recettes WHERE id = ?";
      await connection.execute(sql, [id]);
      connection.release();
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }

  static async checkRecette(titre) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        "SELECT * FROM recettes WHERE titre = ?",
        [titre]
      );
      connection.release();
      return result.length > 0;
    } catch (e) {
      connection.release();
      throw new Error(e.message);
    }
  }
}
