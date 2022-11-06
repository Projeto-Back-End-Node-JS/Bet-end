import { errorMiddleware } from "./middleware/error.middleware";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.routes";
import sessionRoutes from "./routes/sessionRoutes.routes";
import poolRoutes from "./routes/poolRoutes.routes";


const app = express();
app.use(express.json());


app.use(userRoutes);
app.use(sessionRoutes);
app.use(errorMiddleware)


app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/pools", poolRoutes);


export default app;
