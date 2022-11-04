import { errorMiddleware } from "./middleware/error.middleware";
import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/userRoutes.routes";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use(userRoutes);

app.use(errorMiddleware);

export default app;
