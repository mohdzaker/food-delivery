import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "./routes/Auth";
import connectToDB from "./db";
dotenv.config();

const app = express();
connectToDB();
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRouter);
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello, Foodie Express!");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));