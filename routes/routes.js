import express from "express";
import {
  renderHome,
  rutaNoEncontrada,
  getPosts,
  addPost,
  editPostLike,
} from "../controllers/index.js";

const router = express.Router();

router.get("/", renderHome);

router.get("/posts", getPosts);

router.post("/post", addPost);

router.put("/post", editPostLike);

router.get("/*", rutaNoEncontrada);

export default router;
