import pool from "../config/db.js";

export async function getPostsQuery() {
  try {
    const { rowCount, rows } = await pool.query(`SELECT * FROM posts`);
    if (rowCount === 0) {
      throw new Error("No hay datos");
    }

    return rows;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addPostQuery(datos) {
  try {
    const query = {
      text: "INSERT INTO posts (titulo,img, descripcion, likes) VALUES ($1, $2, $3, $4) returning *",
      values: datos,
    };
    const { rowCount, rows } = await pool.query(query);
    if (rowCount === 0) {
      throw new Error("No se pudo crear el post");
    }
    return rows[0];
  } catch (error) {
    console.log(error.message);
  }
}

export async function editPostLikeQuery(id) {
  try {
    const query = {
      text: "UPDATE posts SET likes =likes+ 1 WHERE id = $1 returning *",
      values: [id],
    };
    const { rowCount, rows } = await pool.query(query);
    if (rowCount === 0) {
      throw new Error("No se pudo dar like");
    }
    return rows[0];
  } catch (error) {
    console.log(error.message);
  }
}
