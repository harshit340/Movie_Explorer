import express from "express";
import { connecttodatabase } from "../backend/src/db/connection.js";
import router from "./src/routes/userRoutes.js";
import "dotenv/config"
import cors from "cors"
const app = express();
const PORT=3000;
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/api/user",router);

connecttodatabase();
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})































