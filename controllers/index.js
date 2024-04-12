import {
  getPostsQuery,
  addPostQuery,
  editPostLikeQuery,
} from "../queries/consultas.js";

export function renderHome(req, res) {
  res.sendFile("views/index.html", { root: "." });
}

export async function getPosts(req, res) {
  try {
    const rows = await getPostsQuery();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function addPost(req, res) {
  try {
    const { titulo, img, descripcion } = req.body;
    const data = [titulo, img, descripcion, 0];
    const result = await addPostQuery(data);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export async function editPostLike(req, res) {
  try {
    const { id } = req.query;
    const result = await editPostLikeQuery(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

export function rutaNoEncontrada(req, res) {
  res.status(404).send("Página no encontrada");
}
