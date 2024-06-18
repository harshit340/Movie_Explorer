
process.env.MONGODB_URL = 'mongodb://localhost:27017/users';

const  express =require("express") ;
const users = require("../backend/src/modules/users");
const {connecttodatabase , disconnecttodatabase} =require("../backend/src/db/connection");
const router = require("../backend/src/routes/user")
const app = express();
const PORT=8001;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/user",router);

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































