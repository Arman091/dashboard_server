import express from "express";
import { userSignup, userLogin } from "../controllers/userController.js";
import { userData } from "../controllers/userData.js";
const router = express.Router();
router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/users", userData);
export default router;
