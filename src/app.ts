import { errorMiddleware } from "./middleware/error.middleware";
import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.routes";
import sessionRoutes from "./routes/sessionRoutes.routes";
import matchRoutes from "./routes/matchRoutes.routes";
import poolRoutes from "./routes/poolRoutes.routes";
import betRoutes from "./routes/betRoutes.routes";


const app = express();
app.use(express.json());


app.use(userRoutes);
app.use(sessionRoutes);
app.use(errorMiddleware)


app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/matches", matchRoutes);
app.use("/pools", poolRoutes);
app.use("/bets", betRoutes);


export default app;
