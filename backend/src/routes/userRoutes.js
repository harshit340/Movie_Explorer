import express from "express";
import { createNewAccount, loginAccount } from "../controllers/userController.js";
const router = express.Router();


router.post("/signup",createNewAccount);
router.post("/login",loginAccount);

export default router; 