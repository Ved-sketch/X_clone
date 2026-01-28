import express from "express";
import { newPost, getPosts, updateLikes } from "../Controllers/PostControllers.js";

const router = express.Router();

// Create a new post
router.post("/", newPost);

// Get all posts
router.get("/", getPosts);
router.post("/like/:postId",updateLikes);

// Like a specific post
router.post("/:id/like", likePost);

export default router;