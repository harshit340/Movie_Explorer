const  express = require("express");
const {createNewAccount,loginAccount} = require("../controllers/user")
const router = express.Router();



router.post("/signup",createNewAccount);
router.post("/login",loginAccount);








module.exports= router;