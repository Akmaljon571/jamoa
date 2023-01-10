import { Router } from "express";
import { Create_like, DELETE_LIKE, getUserLikes } from "./like";

const likeRouter = Router()

export default likeRouter
    .get("/getLike", getUserLikes)
    .post("/createLike", Create_like)
    .delete('/deleteLike/:likeId', DELETE_LIKE)