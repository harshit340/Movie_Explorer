import  express from "express";

import {createNewAccount,loginAccount} from "../controllers/user.js";
const router = express.Router();



router.post("/signup",createNewAccount);
router.post("/login",loginAccount);







export default router;