
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import {app} from "./app.js" 

import { connecttodatabase , disconnecttodatabase } from "../backend/src/db/connection.js";
import  router  from "../backend/src/routes/user.js";



const PORT=8009;


async function startServer() {
    try {
        await connecttodatabase();
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
    }
}




process.on('SIGINT', async () => {
    try {
        await disconnecttodatabase();
        process.exit(0);
    } catch (error) {
        console.error("Failed to disconnect from database:", error);
        process.exit(1);
    }
});

startServer();































