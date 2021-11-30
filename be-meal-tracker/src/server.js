import { express } from "express";
import { routes } from "./routes";
import { db } from "./db";

const app = express();

app.use(express.json());
const start = async() => {
    await app.listen(8080);
    console.log("Server is listening on port 8080")
};